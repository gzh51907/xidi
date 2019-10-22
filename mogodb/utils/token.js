const jwt = require('jsonwebtoken');

let {secret} = require('../config.json');

function create(data,expiresIn=60*60*24*7){
    let token = jwt.sign({data}, secret, {
        expiresIn
    });
    return token;
}

function verify(token){
    let res;
    let userName;
    try{
        let result = jwt.verify(token, secret);
        // console.log('token校验：',result)
        res = true;
        userName = result.data;
        
    }catch(err){
        res = false;
    }
    
    return {res,userName};
}

module.exports = {
    create,
    verify
}