const mongoose = require('mongoose');
const connectDB = async () => {
    const conn = await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false
    }); 
    console.log('Mongo DB connected'.red.bold);
}

module.exports = connectDB;