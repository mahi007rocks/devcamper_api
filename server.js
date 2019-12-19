const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
// const logger = require('./middleware/logger');
//Route files
const bootcamps = require('./routes/bootcamps');
//Load env vars
dotenv.config({path: './config/config.env'});

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