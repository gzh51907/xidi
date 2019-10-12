const {MongoClient} = require('mongodb')

MongoClient.connect("mongodb://127.0.0.1:27017",async function(err,client){
    if(err) throw err;
    let db = client.db('h51907');
    
    let col = db.collection('carousel');
    let list = await col.find().toArray();
    return list
})

