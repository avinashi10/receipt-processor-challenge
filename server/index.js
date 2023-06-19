// LIBRARY IMPORTS
const express = require('express');
const morgan = require('morgan');
const path = require('path');

// SET APP AS AN EXPRESS SERVER
const app = express();

// ADD APP-WIDE MIDDLEWARE
app.use(express.json());
app.use(morgan('dev'));

// REQUIRE ROUTER
const router = require('./routes.js');

// SERVE UP ALL STATIC AND GENERATED ASSETS
app.use(express.static(path.join(__dirname, '../test')))

app.use('', router);

app.listen(3000);

console.log('Server listening at http://localhost:3000');
