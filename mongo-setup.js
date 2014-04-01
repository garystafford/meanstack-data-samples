require('mongodb').MongoClient;

var Db = require('mongodb').Db,
  Server = require('mongodb').Server,
  Code = require('mongodb').Code,
  assert = require('assert'),
  db = new Db('meanstack-test', new Server('localhost', 27017));

// Establish connection to db
db.open(function (err, db) {

  if (isNull(db.getCollection('components2').exists())) {

    // Crete the collection
    db.createCollection('components2', function (err, collection) {

      // Insert documents to perform distinct against
      collection.insert({ "component": "mongod", "description": "core database process" });
      collection.insert({ "component": "mongos", "description": "controller and query router for sharded clusters" });
      collection.insert({ "component": "mongo", "description": "interactive MongoDB Shell" });
      collection.insert({ "component": "mongodump", "description": "utility for creating binary export of database contents" });
      collection.insert({ "component": "mongorestore", "description": "writes data from a binary database dump to a MongoDB instance" });
      collection.insert({ "component": "mongooplog", "description": "polls operations from the replication oplog" });
    });
  }
});
