var mongoose = require('mongoose');

module.exports = mongoose.model('Component', {
    component: String,
    url: String
});