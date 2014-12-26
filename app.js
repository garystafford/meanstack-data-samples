// set up =====================================
var express  = require('express'),
    path     = require('path'),
    app      = express(),
    mongoose = require('mongoose');

// configuration ==============================
app.directory = __dirname;

require('./routes')(app);
require('./app/routes.js')(app);
require('./config/environments')(app);

module.exports = app;

// connect to mongoDB database ================
mongoose.connect(app.get('db'));
