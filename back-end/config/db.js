const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
}, () => {
    console.log('Connected Successfully to MongoDb')
}, (err) => console.log("Failed to connect to MongoDb", err))

