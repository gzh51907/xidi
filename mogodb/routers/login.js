/**
 * 用户CRUD
 * 增：C（Create）
 * 删：D（Delete）
 * 改：U（Update）
 * 查：R（Retrieve）
 */
const express = require('express');
const Router = express.Router();

const { mongo } = require('../db')
const { formatData, token } = require('../utils')

const colName = 'user'

// 注册
// /user/reg



Router.post('/reg', async (req, res) => {

    let { username, password } = req.body;
    // let username = req.body.username;
    // let password = req.body.password;
    // console.log(username, password)
    // console.log(req.body)
    let results = await mongo.find(colName, { username: username });
    // console.log(results.length)
    if (results.length > 0) {
        res.send('false')
    } else {
        let result = await mongo.create(colName, [{ username, password, regtime: new Date() }]);
        let resultShop = await mongo.create('shopping', [{ username, 'data': {} }])
        res.send('true');
    }


})


// 登录
Router.post('/login', async (req, res) => {

    let { username, password, mdl } = req.body;

    let result = await mongo.find("user", { username, password });
    if (result.length > 0) {
        // 如用户需要免登陆操作，则生成一个token并返回给前端
        let Authorization
        if (mdl) {
            Authorization = token.create(username)
        }
        res.send({ "data": Authorization,"code": true });
    } else {
        res.send({ "code": false })
    }

})



module.exports = Router;