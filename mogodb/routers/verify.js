
const express = require('express')

const Router = express.Router();
const {formatData,token} = require('../utils')




Router.use('/',(req,res,next)=>{

    let Authorization =  req.query;
    // req.get('Authorization');

    // 校验token有效性
    let result = token.verify(Authorization);

    console.log(result)
    res.send(formatData({code:result?1:0}))

     return res;
});




module.exports = Router