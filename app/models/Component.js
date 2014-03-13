var mongoose = require('mongoose');

exports.componentSchema = new mongoose.Schema({
    component: String,
    url: String
});