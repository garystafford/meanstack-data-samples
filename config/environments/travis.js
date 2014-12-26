// set up =====================================
var express          = require('express');
var bodyParser       = require('body-parser');
var errorHandler     = require('errorhandler');
var favicon          = require('serve-favicon');
var logger           = require('morgan');
var cookieParser     = require('cookie-parser');
var methodOverride   = require('method-override');
var session          = require('express-session');
var path             = require('path');
var env              = process.env.NODE_ENV || 'development';

module.exports = function (app) {
    if ('travis' == env) {
        console.log('environment = travis');
        app.use(function staticsPlaceholder(req, res, next) {
            return next();
        });
        app.set('db', 'mongodb://localhost/meanstack-travis');
        app.set('port', process.env.NODE_PORT || 3000);
        app.set('views', path.join(app.directory, '/app'));
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        app.use(favicon('./app/favicon.ico'));
        app.use(logger('dev'));
        app.use(bodyParser.json());
        app.use(methodOverride());
        app.use(cookieParser('your secret here'));
        app.use(session({secret: 'mysecret', resave: true, saveUninitialized: true}));

        app.use(function middlewarePlaceholder(req, res, next) {
            return next();
        });

        app.use(errorHandler());
    }
};
