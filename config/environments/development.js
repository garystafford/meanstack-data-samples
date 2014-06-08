// set up =====================================
var express          = require('express');
var bodyParser       = require('body-parser');
var errorHandler     = require('errorhandler');
var favicon          = require('static-favicon');
var logger           = require('morgan');
var cookieParser     = require('cookie-parser');
var methodOverride   = require('method-override');
var session          = require('express-session');
var path             = require('path');
var env              = process.env.NODE_ENV || 'development';

module.exports = function (app) {
    if ('development' == env) {
        console.log('env = development');
        app.use(function staticsPlaceholder(req, res, next) {
            return next();
        });
        app.set('db', 'mongodb://localhost/meanstack-dev');
        app.set('name', 'A generator-meanstack sample application - Development');
        app.set('port', process.env.PORT || 9000);
        app.set('views', path.join(app.directory, '/app'));
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        app.use(favicon());
        app.use(logger('dev'));
        app.use(bodyParser());
        app.use(methodOverride());
        app.use(cookieParser('your secret here'));
        app.use(session());

        app.use(function middlewarePlaceholder(req, res, next) {
            return next();
        });

        app.use(errorHandler());
    }
};