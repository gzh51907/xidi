const express = require('express')

const Router = express.Router();
const {formatData,token} = require('../utils')

Router.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');


    // xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
const homeRouter =require('./home.js');
const goodsRouter = require('./goods.js')
const categoryNavRouter = require('./categoryNav')
const navRouter = require('./nav')
const shoppingRouter = require('./shopping')
const loginRouter = require('./login')
const registerRouter = require('./register')
const verifyRouter = require('./verify')

Router.use(express.urlencoded({extended:true}),express.json());//推导：内部自动调用next
Router.use('/home',homeRouter)
Router.use('/goods',goodsRouter)
Router.use('/categoryNav',categoryNavRouter)
Router.use('/nav',navRouter)
Router.use('/verify',verifyRouter)
Router.use('/shopping',shoppingRouter)
Router.use('/login',loginRouter)
Router.use('/register',registerRouter)


module.exports = Router
