'use strict';

/**
 * Module dependencies.
 */
//var utilities = require('./config/utilities');

// Grabbing module files using the walk function
//var modulesJSFiles = utilities.walk('./public/modules', /(.*)\.js$/);

// Karma configuration
module.exports = function (config) {
    // Determines Karma's browser choice based on environment
    var testBrowser = 'PhantomJS'; // Default browser
    if (process.env.NODE_ENV === 'travis') {
        testBrowser = 'PhantomJS'; // Must use for headless CI (Travis-CI)
    }
    console.log("Karma browser: " + testBrowser);

    config.set({
        // Frameworks to use
        frameworks: ['jasmine'],

        // List of files / patterns to load in the browser
        files: [
            'app/bower_components/angular/angular.js',
            'app/bower_components/angular-resource/angular-resource.js',
            'app/bower_components/angular-mocks/angular-mocks.js',
            'app/bower_components/angular-route/angular-route.js',
            'app/scripts/*.js',
            'app/scripts/**/*.js',
            //'test/mock/**/*.js',
            'test/spec/**/*.js'
        ],

        // Test results reporter to use
        // Possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],

        // Web server port
        port: 9876,

        // Enable / disable colors in the output (reporters and logs)
        colors: true,

        // Level of logging
        // Possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // Enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // Chrome, ChromeCanary, Firefox, Opera,
        // Safari (only Mac), PhantomJS, IE (only Windows)
        browsers: [testBrowser],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 30000,

        // Continuous Integration mode
        // If true, it capture browsers, run tests and exit
        singleRun: true
    });
};
