const express = require('express')

const app = express();
const router = express.Router();
const {PORT,dbUrl,dbName} = require('./config.json')
const allRouter = require('./routers')


app.use(express.static('./')); 
app.use(allRouter)

app.listen(PORT,()=>{
    // console.log('true')
})
