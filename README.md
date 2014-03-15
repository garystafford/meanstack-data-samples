## Retrieving Data with MEAN Stack
### Overview
Based on wlepinski's [generator-meanstack](https://github.com/wlepinski/generator-meanstack). Explores various methods of retrieving and displaying data using AngularJS.


Contains examples of retrieving data using various AngularJS methods:
* Function in AngularJS controller contains array of static items
* AngularJS service returns JSON array of static objects to controller
* AngularJS factory returns contents of JSON file to controller
* MongoDB database returns collection of documents to controller

### Instructions to Use Project
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
db.components.insert({ "component": "mongod", "description": "the core database process" })
db.components.insert({ "component": "mongos", "description": "the controller and query router for sharded clusters" })
db.components.insert({ "component": "mongo",  "description": "the interactive MongoDB Shell" })
show collections // verifies collection was created
db.components.find() // verifies documents were created
```

##### Install and Configure the Project

```
npm install -g generator-meanstack
git clone https://github.com/garystafford/generator-meanstack-sample.git
cd generator-meanstack-sample
npm install
grunt
grunt server
```

### Notes About project
* Link to view: [http://localhost:3000/#/test](http://localhost:3000/#/test).
* I change Karma's default port `8080` to `8090` in `karma.conf.js` and `karma-e2e.conf.js` files. It conflicted with my installation of Apache and every other application that wants to use port `8080` by default.
* The `grunt` command now runs without error. In the original project, `jshint` had a strict violation with `validthis`.