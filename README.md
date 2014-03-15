## generator-meanstack Sample Project
#### A project based on the generator-meanstack [(https://github.com/wlepinski/generator-meanstack)](https://github.com/wlepinski/generator-meanstack). Demostrates different methods of getting data onto page.

Contains samples of reading data from various sources:
* Function in controller returns array of items
* Service returns JSON array of objects to controller
* Factory returns contents of JSON file to controller
* MongoDB returns collection of documents to controller

#### Create and populate MongoDB database(s)
 ```mongo
use meanstack-test
db.components.insert({ "component": "mongod", "description": "the core database process" })
db.components.insert({ "component": "mongos", "description": "the controller and query router for sharded clusters" })
db.components.insert({ "component": "mongo",  "description": "the interactive MongoDB Shell" })
show collections
db.collections.find()
