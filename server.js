const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// requrie database config file
const databaseconnection = require('./config/database.config.js');

// instance of the express
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// adding the routes
app.use('/users', require('./app/routes/users.routes.js'));

// variable for port
const port = process.env.PORT || 3000;

//database connection
mongoose.connect(databaseconnection.url,{
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log("Could not connect to the database");
});

//starting the server
app.listen(port, ()=>{
    console.log(`Server listening at ${port}`);
});

