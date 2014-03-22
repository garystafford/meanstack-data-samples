## Retrieving Data with MEAN Stack
### Overview
Explores various methods of retrieving and displaying data using AngularJS. Project based on wlepinski's [generator-meanstack](https://github.com/wlepinski/generator-meanstack), with MongoDB, Mongoose, and Twitter Bootstrap added.


Contains examples of retrieving data using various AngularJS methods:
* Function within AngularJS controller returns array of strings.
* AngularJS Service returns an array of simple object literals to the controller.
* AngularJS Factory returns the contents of JSON file to the controller.
* MongoDB Database returns a collection of documents to the controller.
* AngularJS Factory returns results from Google's RESTful Web Search API to the controller.

### Project Instructions
* Review the [generator-meanstack](https://github.com/wlepinski/generator-meanstack) `README.md`
* Project requires MongoDB, Node, Express, and yo
* Set the `NODE_ENV` environment variable to `test`
* Set the `CHROME_BIN` environment variable for Karma  
(i.e. `C:\Program Files (x86)\Google\Chrome\Application\chrome.exe`

##### Create and Populate MongoDB Test Database

```
start mondod
mongo
use meanstack-test // creates database if it doesn't exist
db.components.insert({ "component": "mongod", "description": "core database process" })
db.components.insert({ "component": "mongos", "description": "controller and query router for sharded clusters" })
db.components.insert({ "component": "mongo",  "description": "interactive MongoDB Shell" })
db.components.insert({ "component": "mongodump",  "description": "utility for creating binary export of database contents" })
db.components.insert({ "component": "mongorestore",  "description": "writes data from a binary database dump to a MongoDB instance" })
db.components.insert({ "component": "mongooplog",  "description": "polls operations from the replication oplog" })
show collections // verifies collection was created
db.components.find() // verifies documents were created
```

##### Install and Configure the Project

```
npm install -g generator-meanstack
git clone https://github.com/garystafford/meanstack-data-samples.git
cd meanstack-data-samples
npm install
grunt
grunt server
```

### Notes About Project
* Original project based on yeoman's [generator-angular](http://yeoman.io/). All generator commands work.
* Link to main AngularJS `test-bootstrap` view: [http://localhost:3000/#](http://localhost:3000/#).
* HTTP GET call to MongoDB data: [http://localhost:3000/api/components](http://localhost:3000/api/components).
* Deferred promises used to perform actions asynchronously: [$http](http://docs.angularjs.org/api/ng/service/$http)
* Karma unit tests included for controller and services.
* Karma's default port `8080` to `8090` in `karma.conf.js` and `karma-e2e.conf.js` files. It conflicted with my installation of Apache and every other application that wants to use port `8080` by default.
* The `grunt` command now runs without error. In the original project, `jshint` had a strict violation with `validthis`.

Preview of project on Chrome for Android:

![Chrome on Android ](https://github.com/garystafford/meanstack-data-samples/blob/master/public/images/MobileView.png?raw=true)
