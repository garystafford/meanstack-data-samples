<a href='https://travis-ci.org/garystafford/meanstack-data-samples'><img src='https://travis-ci.org/garystafford/meanstack-data-samples.svg?branch=express4'></a>
<a href='https://david-dm.org/garystafford/meanstack-data-samples'><img src='https://david-dm.org/garystafford/meanstack-data-samples.png'></a>
<a href='https://david-dm.org/garystafford/meanstack-data-samples#info=devDependencies'><img src='https://david-dm.org/garystafford/meanstack-data-samples/dev-status.png'></a>
[![Gitter](https://badges.gitter.im/Join Chat.svg)](https://gitter.im/garystafford/meanstack-data-samples?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
## Retrieving and Displaying Data with AngularJS and the MEAN Stack
Project created for 2-part blog post series: 
[Retrieving and Displaying Data with AngularJS and the MEAN Stack](http://wp.me/p1RD28-16F). Project explores various methods of retrieving and displaying data using AngularJS and the MEAN Stack.  

Project architecture based on William Lepinski’s [generator-meanstack](https://github.com/wlepinski/generator-meanstack) 
project with Mongoose and Twitter Bootstrap added.  

Project's final method requires you to create and insert a Google API key and search engine ID. See notes below.

### Overview
Contains examples of retrieving data using various AngularJS methods:
* Function within AngularJS controller returns array of strings.
* AngularJS Service returns an array of simple object literals to the controller.
* AngularJS Factory returns the contents of JSON file to the controller using a resource object (not discussed in post).
* AngularJS Factory returns a collection of documents from MongoDB Database to the controller.
* NEW: AngularJS Factory returns results from Google's RESTful Custom Search API to the controller.

### GitHub Branches
**customsearch**  
New branch for project conversion to Google Custom Search created December, 2014.
* Switch from using Google's Web Search API to Google's CustomSearch API v1.
  * Google's Web Search API was discontinued on September 29, 2014.
* Environment variable `PORT` changed to `NODE_PORT`.
* Updated all packages in `package.json`.

**express4**  
New branch for project conversion to ExpressJS 4.x created June, 2014.
* Converted project to ExpressJS 4.4.1. Good instructions on [scotch.io](http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0).
* Updated all Node.js dependencies in package.json.
* Added project to [david-dm.org](https://david-dm.org/garystafford/meanstack-data-samples) to monitor Node.js dependencies.

**master**  
Original code for blog post.

### Instructions
* Review the [generator-meanstack](https://github.com/wlepinski/generator-meanstack) `README.md`
* Project requires MongoDB, Node, Express, and Yeoman.
* Set the `NODE_ENV` environment variable to the preferred environment (i.e. `test`).
* If no `NODE_ENV` environment variable is set, application defaults to `development`.
* Set the `NODE_PORT` environment variable to the preferred startup port for node (i.e. `3111`).
* If no `NODE_PORT` environment variable is set, application defaults to port `3000`.
* If using Chrome for Karma test, set the `CHROME_BIN` environment variable for Karma (i.e. `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`).

**Installation and Configuration**  
Run the following commands:
```
npm install -g generator-meanstack #optional
git clone https://github.com/garystafford/meanstack-data-samples.git
cd meanstack-data-samples
npm install
bower install
mongoimport --db meanstack-$NODE_ENV --collection components components.json --drop # Unix
# mongoimport --db meanstack-%NODE_ENV% --collection components components.json --drop # Windows
```
Add your own `search engine id` and your `API key` to the `cse_config.json` file.  
To test the application, then start, run the following commands:
```
grunt test
grunt server
```

### Notes
* Link to main AngularJS `test-bootstrap` view: [http://localhost:3000/#](http://localhost:3000/#).
* RESTful call to MongoDB data: [http://localhost:3000/api/components](http://localhost:3000/api/components).
* Deferred and Promises used to perform actions asynchronously: [$http](http://docs.angularjs.org/api/ng/service/$http)
* Karma unit tests included for controller and services.
 * Karma's default port `8080` to `8090` in `karma.conf.js`
 * Karma configuration file. Port `8080` conflicted with other application that wants to use port `8080` by default.

### Preview
Chrome for Android:  
![Chrome on Android ](https://github.com/garystafford/meanstack-data-samples/blob/master/public/images/AndroidMobileView.png?raw=true)
