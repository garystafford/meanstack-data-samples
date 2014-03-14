    // set up ========================
    var express = require('express');
    var routes = require('./routes');
    var path = require('path');
    var app = express();
    var mongoose = require('mongoose'); // mongoose for mongodb

    // configuration =================

    app.directory = __dirname;

    require('./config/environments')(app);
    require('./routes')(app);

    module.exports = app;

    mongoose.connect('mongodb://localhost/meanstack-test'); // connect to mongoDB database

    app.configure(function() {
        app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
        app.use(express.logger('dev')); // log every request to the console
        app.use(express.bodyParser()); // pull information from html in POST
        app.use(express.methodOverride()); // simulate DELETE and PUT
    });

    // routes ======================================================================
    require('./app/routes.js')(app);

    // listen (start app with node server.js) ======================================
    //app.listen(8092);
    //console.log("App listening on port 8092");