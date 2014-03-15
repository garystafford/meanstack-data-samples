// set up ========================
var express = require('express');
var routes = require('./routes');
var path = require('path');
var app = express();
var mongoose = require('mongoose');

// configuration =================
app.directory = __dirname;

require('./routes')(app);
require('./app/routes.js')(app);
require('./config/environments')(app);
module.exports = app;

mongoose.connect(app.get('db')); // connect to mongoDB database