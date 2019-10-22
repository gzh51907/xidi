const express = require('express');
const Router = express.Router();
const {mongo} = require('../db')
const {formatData} = require('../utils')


Router.use('/',async  (req,res) => {
     let id = req.body.id;
   //  console.log(id)
     let condition = {'data.id' : Number(id)}
    let  result = await mongo.find('goods',condition);
    res.send(result);
 })

 module.exports = Router