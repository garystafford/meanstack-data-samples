var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var componentSchema = new Schema({
  component: String,
  url: String
});

module.exports = mongoose.model('Component', componentSchema);

/*
Shorthand method for all above code:

 var mongoose = require('mongoose');
 module.exports = mongoose.model('Component', {
    component: String,
    url: String
  });
*/