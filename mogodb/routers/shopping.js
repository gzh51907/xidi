const express = require('express');
const Router = express.Router();
const { mongo } = require('../db')
const { formatData, token } = require('../utils')
// Router.use(express.urlencoded({extended:true}),express.json());//推导：内部自动调用next
/**
 * 增
 * @param {String} colName  集合名称
 * @param {Array} data     要添加的数据
 */
let colName = "shopping";
let userName;

Router.use( '/',(req, res, next) => {
    // console.log(req.query)
    let {Authorization} = req.query;
    let result =  token.verify(Authorization);
    // console.log(1,Authorization)
    // console.log(2,result)
    userName = result.userName
    if (result.res) {
        next();
    } else {
        res.send('false')
    }
});

Router.get('/list', async (req, res, next) => {

    // colName = 'user';
    let condition = { "username": userName };
    let result = await mongo.find(colName, condition);
    let arr = result[0].data
    // console.log(result)
    res.send(arr)
})










Router.get('/delete', async (req, res, next) => {

    let { shopId, agentId } = req.query;


    let condition = { "username": userName};
    let target = 'data.shop' + Number(shopId) ;
    let val;
    if(agentId){
        val  = {'goodsId':Number(agentId) };
    }else{
        val = false;
    }
    let  condition2  = {target ,val} 
    let result = await mongo.remove(colName, condition,condition2);
    res.send(result)
})






Router.get('/create', async (req, res, next) => {

    let { buyNum, agentId, shopId } = req.query;
    let condition = { "username": userName };

    let target = 'data.shop' + [shopId]
    let val = { "goodsId": Number(agentId)   };
    let condition2 = { target, val }


    let result = await mongo.find('shopping', condition, condition2);    //查询用户购物车中是否已有该商品
    // res.send(result)
    // console.log(result)
    // way: 方法
    // target : 目标
    // val : 修改的值
    //  console.log(result.length)
    let way;
    // console.log(result)
    if (result.length > 0) {
        // console.log(1)                                                    //有则修改
        way = '$set';
        let query = { way, target, buyNum, agentId }
        let result2 = await mongo.update('shopping', condition, query);
        res.send("true")
    } else {
        // console.log(2)                                                              //无则创建                                                                  
        way = '$push';
        let condition3 = { "data.id": Number (agentId) }
        // console.log(condition3)
        let result3 = await mongo.find('goods', condition3);
        // res.send(result3)
        target = 'data.shop' + [result3[0].data.shop.id,]
        let query = {

            "shopId": Number(result3[0].data.shop.id),
            "shopname": result3[0].data.shop.name,
            "goodsId": result3[0].data.id,
            "coverImg": result3[0].data.images.main[0],
            "buyNum": Number(buyNum),
            "longName": result3[0].data.name,
            "price": result3[0].data.price,
            "salePrice": result3[0].data.salePrice,
        }
        let result4 = await mongo.updates('shopping', condition, target, query);
        res.send("true")
    }

})

module.exports = Router;