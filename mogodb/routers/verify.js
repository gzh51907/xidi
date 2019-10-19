
const express = require('express')

const Router = express.Router();
const {formatData,token} = require('../utils')




Router.use('/',(req,res,next)=>{

    let Authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoienhjMTIzIiwiaWF0IjoxNTcxMjEyNzkxLCJleHAiOjE1NzE4MTc1OTF9.qlOeE4HeHoCFtCSDlMrYO1RlIKiVQftbcRTwOBJu5Wk'
    // req.get('Authorization');

    // 校验token有效性
    let result = token.verify(Authorization);

    console.log(result)
    res.send(formatData({code:result?1:0}))

     return res;
});




module.exports = Router