//const express = require('express');  //es5 syntax

import express from 'express';  // es6 syntax
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'


/*
register = http://localhost:8080/api/v1/auth/register

*/


// configure env
dotenv.config();

// database config
connectDB();



// rest object
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
app.use('/api/v1/auth',authRoutes);



// rest api
app.get('/', (req,res) => {
    res.send({
        message:'hiiiiiiiiiiiiiiiiii'
    })
})

// PORT
const PORT = process.env.PORT  || 8080;

// run listen
app.listen(PORT, ()=> {
    console.log(`Server Started at port: ${PORT} status: ${process.env.DEV_MODE}`);
})


















