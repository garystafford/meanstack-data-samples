<a href='https://travis-ci.org/garystafford/meanstack-data-samples'><img src='https://travis-ci.org/garystafford/meanstack-data-samples.svg?branch=express4'></a>
<a href='https://david-dm.org/garystafford/meanstack-data-samples'><img src='https://david-dm.org/garystafford/meanstack-data-samples.png'></a>
<a href='https://david-dm.org/garystafford/meanstack-data-samples#info=devDependencies'><img src='https://david-dm.org/garystafford/meanstack-data-samples/dev-status.png'></a>
## Retrieving and Displaying Data with AngularJS and the MEAN Stack
Project created for 2-part blog post series: [Retrieving and Displaying Data with AngularJS and the MEAN Stack](http://wp.me/p1RD28-16F). Explores various methods of retrieving and displaying data using AngularJS and the MEAN Stack. Originally based on William Lepinski’s [generator-meanstack](https://github.com/wlepinski/generator-meanstack) project with Mongoose and Twitter Bootstrap added.
### GitHub Branches  
**express4**  
New branch for project conversion to ExpressJS 4.x created June, 2014.
* Converted project to ExpressJS 4.4.1. Good instructions on [scotch.io](http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0).
* Updated all Node.js dependencies in package.json.
* Added project to [david-dm.org](https://david-dm.org/garystafford/meanstack-data-samples) to monitor Node.js dependencies.

**master**  
Original code for blog post.

### Overview
Contains examples of retrieving data using various AngularJS methods:
* Function within AngularJS controller returns array of strings.
* AngularJS Service returns an array of simple object literals to the controller.
* AngularJS Factory returns the contents of JSON file to the controller.
* AngularJS Factory returns the contents of JSON file to the controller using a resource object (not discussed in post).
* AngularJS Factory returns a collection of documents from MongoDB Database to the controller.
* AngularJS Factory returns results from Google's RESTful Web Search API to the controller.

### Instructions
* Review the [generator-meanstack](https://github.com/wlepinski/generator-meanstack) `README.md`
* Project requires MongoDB, Node, Express, and Yeoman.
* Set the `NODE_ENV` environment variable to `test`.
* If no `NODE_ENV` environment variable is set, application defaults to 'development'.
* Set the `PORT` environment variable to the preferred startup port for node (i.e. 3000).
* If no `PORT` environment variable is set, application defaults to 3000.
* If using Chrome for Karma test, set the `CHROME_BIN` environment variable for Karma
  (i.e. `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`).

**Installation and Configuration**  
```
npm install -g generator-meanstack #optional
git clone https://github.com/garystafford/meanstack-data-samples.git
cd meanstack-data-samples
npm install
bower install
mongoimport --db meanstack-$NODE_ENV --collection components components.json --drop # Unix
# mongoimport --db meanstack-%NODE_ENV% --collection components components.json --drop # Windows
grunt test
grunt server
```

### Notes
* Link to main AngularJS `test-bootstrap` view: [http://localhost:3000/#](http://localhost:3000/#).
* RESTful call to MongoDB data: [http://localhost:3000/api/components](http://localhost:3000/api/components).
* Deferred and Promises used to perform actions asynchronously: [$http](http://docs.angularjs.org/api/ng/service/$http)
* Karma unit tests included for controller and services.
* Karma's default port `8080` to `8090` in `karma.conf.js` Karma configuration file. Port 8080 conflicted with my installation of Apache and every other application that wants to use port `8080` by default.
* Added support for Travis-CI. Project now building on [Travis-CI](https://travis-ci.org/garystafford/meanstack-data-samples) for each commit to GitHub (Added April, 2014).

### Preview
Chrome for Android:  
![Chrome on Android ](https://github.com/garystafford/meanstack-data-samples/blob/master/public/images/AndroidMobileView.png?raw=true)
