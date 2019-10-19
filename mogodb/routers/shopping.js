const express = require('express');
const Router = express.Router();
const { mongo } = require('../db')
const { formatData, token } = require('../utils')

/**
 * 增
 * @param {String} colName  集合名称
 * @param {Array} data     要添加的数据
 */
let colName = "shopping";
let userName;
Router.use('/', (req, res, next) => {

    let Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoienhjMTIzIiwiaWF0IjoxNTcxMjEyNzkxLCJleHAiOjE1NzE4MTc1OTF9.qlOeE4HeHoCFtCSDlMrYO1RlIKiVQftbcRTwOBJu5Wk'
    // req.get('Authorization');

    // 校验token有效性
    let result = token.verify(Authorization);

    // console.log(result.userName)

    userName = result.userName


    // res.send(formatData({code:result?1:0}))

    //如果token数据通过则进行数据库操作
    if (result.res) {
        next();
        return userName;
    } else {
        // console.log('false')
    }

});
shop263: {
    shopId = 263;
    shopname = '意大利精品炊具用品厂店';
    goodsId = 4859;
    coverImg = 'https://3-image.xidibuy.com/shop/shop.1d7392670ceb61d1017ac03ecaf061e942cd241cc51060de3500842dd515aa3d.jpeg';
    buyNum = 2;
    longName = '意大利原产INOXRIV不锈钢面锅滤器锅盖锅具套装1个装24cm';
    price = "322.30",
        salePrice = "322.30",
        total = (Number(salePrice) * buyNum)
}
//   商店名称 商店ID  商品ID 商品数量 商品类型 商品价格 商品图片

// Router.use('/create', async (req, res, next) => {
//     userName;
//     let buyNum = 2;

//     //  res[ceshi] = 906;
//      agentId = 906;
//     // let shopId = 'shop' + 906 ;
//     let result = await mongo.find(colName, 'find', userName);//查询数据库中该用户是否拥有购物车数据
//     if (result[0]) {
//         let result2 = await mongo.find(colName, 'aggregate', agentId); //查询用户购物车中是否已有该商品
//         let way,target,val,data;
//          // way: 方法
//         // target : 目标
//         // val : 修改的值
//         if (result2[0]) {      
//              way = '$set';
//              target = 'data.' + [agentId] + '.buyNum';
//              val = 2348;         
//         } else {
//              way = '$push';
//              target = 'data.' + [agentId];
//              val = {
//                 "id": agentId,
//                 "buyNum": 23438
//             }
//         }
//         data = { way, target, val }
//         let result3 = await mongo.update(colName, userName, data);

//         res.send()

//     } else {
//         console.log('{false')

//         let a = { id: agentId, buyNum: buyNum }
//         console.log(agentId)
//         await mongo.create(colName, [{
//             userName,
//             data: { [agentId]: { "id": agentId, "buyNum": buyNum ,  } }
//         }]);
//         result = formatData()


//     }



// })


Router.use('/list', async (req, res, next) => {
    let condition = { "username": userName };
    let result = await mongo.find(colName, condition);
    let arr = result[0].data
    res.send(arr)
})

Router.use('/create', async (req, res, next) => {
    let buyNum = 23333333;   //传过来的值
    let agentId = 23249;   //传过来的值
    let shopId = 701;
    let condition = { "username": userName };
    // let condition = { "username": 'zxc123' };    //tole验证的账户
    // console.log(condition,condition10)


    // let result = await mongo.find(colName, 'aggregate', agentId,target); //查询用户购物车中是否已有该商品


    
    let target = 'data.shop' + [shopId]
    let val = { "shopId": shopId };
    let condition2 = { target, val }
    let result = await mongo.find('shopping', condition, condition2);    //查询用户购物车中是否已有该商品
        // res.send(result)
    console.log(result)
    // way: 方法
    // target : 目标
    // val : 修改的值

    let way, target2, val2, data;

    if (result.length > 0) {
        console.log(1)                                                    //有则修改
        way = '$set';
        let query = { way, target, buyNum, agentId }
        let result2 = await mongo.update('shopping', condition, query);
        res.send(result2)
    } else {   
        console.log(2)                                                              //无则创建                                                                  
        way = '$push';
        let condition3 = { "data.id": agentId }
        let result3 = await mongo.find('goods', condition3);
        res.send(result3)
        target = 'data.shop' + [ result3[0].data.shop.id,]
        let query = {
            
                "shopId": Number(result3[0].data.shop.id) ,
                "shopname": result3[0].data.shop.name,
                "goodsId": result3[0].data.id,
                "coverImg": result3[0].data.images.main[0],
                "buyNum": buyNum,
                "longName": result3[0].data.name,
                "price": result3[0].data.price,
                "salePrice": result3[0].data.salePrice,
            }
        let result4 = await mongo.updates('shopping',condition ,target ,query);
        

    }

})

module.exports = Router;