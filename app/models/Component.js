var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ComponentSchema = new Schema({
  component: String,
  url: String
});

module.exports = mongoose.model('Component', ComponentSchema);

/*
Shorthand method for all above code:

 var mongoose = require('mongoose');
 module.exports = mongoose.model('Component', {
    component: String,
    url: String
  });
*/