// const { MongoClient } = require('mongodb');
// const { PORT, dbUrl, dbName } = require('../config.json')


// function connect(param) {
//     return new Promise((resolve, reject) => {
//         MongoClient.connect(dbUrl, { useNewUrlParser: true }, async function (err, client) {
//             // err 错误信息
//             // client 数据库客户端
//             if (err) {
//                 reject(err)
//             };
//             let db = client.db(dbName)
//             resolve({ db, client })
//         })
//     })


// }
// async function find(colName, way, query = {}) {
//     let { db, client } = await connect();

//     let col = db.collection(colName);
//     // col.find(query)
//     let result;
//     if (way == 'find') {
//         //查询数据库
//         result = await col.find(query).toArray();
//     }
//     if (way == 'aggregate') {
// result = await col.aggregate([
//                                                   { '$match': { "data.id":Number(query)  } },
//                                                                                                   ]).toArray();;

//     }
//     //关闭数据库
//     client.close();
//     //返回结果
//     return result;
// }
// module.exports = {
//     find
// }


const { MongoClient } = require('mongodb');

const { dbUrl, dbName } = require('../config.json');
// 连接MongoDB
async function connect() {
    /* return new Promise((resolve,reject)=>{
        MongoClient.connect(DBurl, function (err, client) {
            // err: 错误信息
            // client：数据库客户端
            if (err){
                reject(err)
            }
            // 连接数据库，无则自动创建
            let db = client.db(DBName);
            resolve({client,db})
        });
    }) */
    let result;
    try {
        let client = await MongoClient.connect(dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        let db = client.db(dbName);
        result = { client, db }
    } catch (err) {
        result = err
    }
    return result
}
/**
 * 增
 * @param {String} colName  集合名称
 * @param {Array} data     要添加的数据
 */
async function create(colName, data) {
    let { db, client } = await connect();
    // 获取集合
    let col = db.collection(colName);

    let result = await col.insertMany(data);
    client.close();
    return result
}

/**
 * 删
 * @param {String} colName 
 * @param {Object} query 
 */
async function remove(colName, query) {
    let { db, client } = await connect();
    // 获取集合
    let col = db.collection(colName);

    let result = await col.deleteMany(query);
    client.close();
    return result;
}

/**
 * 改
 * @param {String} colName 
 * @param {Object} query 
 * @param {Object} data     需要修改的数据
 */
async function update(colName, query, { way, target, buyNum, agentId }) {

    // {
    //     '$and': [
    //         { "userName": "zxc123" },
    //         { 'data.shop906': { '$elemMatch': { 'shopId': 906 } } }
    //     ]
    // }

    //     db.shopping.update(
    //         { "userName": "zxc123" }, 
    //      {
    //      $set: {
    //          "data.shop906.$[val].buyNum": 2334
    //      }
    //  }, {
    //      arrayFilters: [ {
    //          "val.goodsId": 233
    //      }],
    //      multi: true
    //  });


    let { db, client } = await connect();
    let col = db.collection(colName);

    let arr = target + '.$[val].buyNum';

    let result = await col.update(
        query,
        {
            [way]: {
                [arr]: buyNum
            }
        }, {
        arrayFilters: [{
            "val.goodsId": agentId
        }],
        multi: true
    }



    );
    

    client.close();
    return result;
}



async function updates(colName, condition, target, query) {


    let { db, client } = await connect();
    let col = db.collection(colName);

    let result = await col.update(
        condition,
        {
            $push: {
                [target]: query
            }
        }


        // db.shopping.update({"username" : "zxc12"},{$push:{"data.shop908":{
        //     "shopId" : 'result3[0].data.shop.id',
        //     "shopname" : 'result3[0].data.shop.name',
        //     "goodsId" : 'result3[0].data.id',
        //     "coverImg" : 'result3[0].data.images.main[0]',
        //     "buyNum" : 'buyNum',
        //     "longName" : 'result3[0].data.name',
        //     "price" : 'result3[0].data.price',
        //     "salePrice" : 'result3[0].data.salePrice',
        //    }}})
    );

    client.close();
    return result;
}








/**
 * 查
 * @param {String} colName      集合名称
 * @param {Object} condition    查询条件1
 * @param {onject} condition2   查询条件2  格式 {target : val}
 */

async function find(colName, condition, condition2) {
    let { db, client } = await connect();
    let col = db.collection(colName);

    // 查询数据库

    // let result


    // if (way == 'find') {
    //查询数据库

    // condition  = { "userName": "zxc123" };
    // target = "data.shop906";
    // val = {"shopId": 906} ; 

    // condition2 = {  target , val } 



    if (condition2) {
        let target = condition2.target;
        let val = condition2.val;
        console.log(condition2)
        result = await col.find(
                {
                    '$and': [
                        condition,
                        { [target]: { '$elemMatch': val } }
                        // {'data.shop651' : {'$elemMatch' : {"shopId": 651} }}
                    ]
                }

        ).toArray();
    } else {
        result = await col.find(condition).toArray();
    }



    // db.shopping.find( {
    //     '$and': [
    //         { "userName" : "zxc123"} ,
    //        {"data.shop906":{'$elemMatch' : {"shopId":906}}}     
    //           ]
    //    })

    // }
    // if (way == 'aggregate') {
    //     result = await
    //         col.aggregate([
    //             { '$match': { [target]: Number(query) } },
    //         ]).toArray();;
    // }


    // db.shopping.find(  {"data.shop906":{$elemMatch : {"goodsId":906}}}     )


    // db.goods.aggregate([
    //     { '$match': { 'data.categoryInfo.data.thirdName' : '汤锅' } },
    // ])
    // if (way == 'aggregate') {
    //     result = await 

    //     col.aggregate([
    //         { '$match': { 'data.id': Number(query) } },
    //     ]).toArray();;

    // }




    // 关闭数据库连接
    client.close();
    //返回结果
    return result;
}

module.exports = {
    find,
    create,
    remove,
    update,
    updates
}