const mongoose = require('mongoose')

const mongo_Url = process.env.MONGO_CONN;

mongoose.connect(mongo_Url)
.then(()=>{
    console.log('MongoDB connect')
}).catch((err)=>{
    console.log("MongoDb Connection Error: ", err)
})