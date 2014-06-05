// set up =====================================
var Db               = require('mongodb').Db;
var Server           = require('mongodb').Server;
var database         = 'meanstack-test';
var db               = new Db(database, new Server('localhost', 27017), {w: 1});
var newCollection    = 'components';
var collection       = {};

db.open(function (err, db) {
  if (err) {
    console.error(err.message);
    return false;
  }

  // drop collection if it already exists
  db.dropCollection(newCollection, function () {
    console.log('collection dropped: ' + newCollection);
  }());

  // instantiate new collection
  var collection = db.collection(newCollection);
  console.log('collection created: ' + newCollection);

  // populate new collection
  collection.insert([
    {
      'component': 'mongod',
      'description': 'core database process'
    },
    {
      'component': 'mongos',
      'description': 'controller and query router for sharded clusters'
    },
    {
      'component': 'mongo',
      'description': 'interactive MongoDB Shell'
    },
    {
      'component': 'mongodump',
      'description': 'utility for creating binary export of database contents'
    },
    {
      'component': 'mongorestore',
      'description': 'writes data from a binary database dump to a MongoDB instance'
    },
    {
      'component': 'mongooplog',
      'description': 'polls operations from the replication oplog'
    }
  ], function (err, result) {

    if (err) {
      console.error(err.message);
      return db.close();
    }

    console.log('documents created: ' + result.length);
    return db.close();
  });
});