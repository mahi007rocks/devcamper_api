const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');
// const logger = require('./middleware/logger');
//Route files
const bootcamps = require('./routes/bootcamps');
//Load env vars
dotenv.config({path: './config/config.env'});
connectDB();
const app = express();

//Dev loggin middleware
if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'));
}
// app.use(logger);
//Mount routers
app.use('/api/v1/bootcamps',bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
     console.log('Server is running on port ', PORT)
     );

//Handle unhandled promise rejections
process.on('unhandledRejection', (err,promise) => {
    console.log('Error: ${err.messge}');
    server.close(() => process.exit(1));
});