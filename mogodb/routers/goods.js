const express = require('express');
const Router = express.Router();
const {mongo} = require('../db')
const {formatData} = require('../utils')


Router.use('/:id',async  (req,res) => {
     let id = req.params.id;

    let  result = await mongo.find('goods', 'aggregate',id);
    // let  result = await mongo.find('home','find')

    res.send(result);
 })

 module.exports = Router