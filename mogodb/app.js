const express = require('express')

const app = express();
const router = express.Router();
const {PORT,dbUrl,dbName} = require('./config.json')
const allRouter = require('./routers')


app.use(express.static('./')); 
app.use(allRouter)

app.listen(PORT,()=>{
    console.log('成功')
})
// app.use('/home/:id', function (req,res,next) { 
//     let a =  req.params.id;
//     console.log(a) 
//     res.send(a)
//  })
//  app.use('/goods',function (req,res,next) { 
//  let a =  req.params;
//     console.log(a) 
//     res.send(a)
// })
// app.use('/Nav',function (req,res,next) { 
//     console.log('2') 
// })
// app.use('categoryNav',function (req,res,next) { 
//     console.log('2') 
// })