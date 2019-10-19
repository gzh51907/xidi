const express = require('express');
const Router = express.Router();
const {mongo} = require('../db')
const {formatData} = require('../utils')



Router.use('/',async  (req,res) => { 
    let  result = await mongo.find('categoryNav','find')

    res.send(result);
 })

 module.exports = Router