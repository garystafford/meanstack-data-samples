// set up =====================================
var express          = require('express');
var bodyParser       = require('body-parser');
var favicon          = require('serve-favicon');
var logger           = require('morgan');
var cookieParser     = require('cookie-parser');
var methodOverride   = require('method-override');
var session          = require('express-session');
var path             = require('path');
var env              = process.env.NODE_ENV || 'development';

module.exports = function (app) {
    if ('production' == env) {
        console.log('environment = production');
        app.set('db', 'mongodb://localhost/meanstack-production');
        app.set('port', process.env.NODE_PORT || 3000);
        app.set('views', path.join(app.directory, '/dist'));
        app.engine('html', require('ejs').renderFile);
        app.set('view engine', 'html');
        app.use(favicon('./app/favicon.ico'));
        app.use(logger('dev'));
        app.use(bodyParser());
        app.use(methodOverride());
        app.use(cookieParser('your secret here'));
        app.use(session());
        app.use(static(path.join(app.directory, 'dist')));
    }
};
