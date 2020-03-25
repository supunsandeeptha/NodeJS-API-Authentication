const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// instance of the express
const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

// variable for port
const port = process.env.PORT || 3000;

//starting the server
app.listen(port, ()=>{
    console.log(`Server listening at ${port}`);
});

