var app = require('./app');

require('http').createServer(app).listen(app.get('port'), function() {
    console.log('Express (' + app.get('env') + ') server listening on port ' + app.get('port'));
});

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meanstack-test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
    var componentSchema = mongoose.Schema({
        component: String,
        url: String
    })

    var Component = mongoose.model('Component', componentSchema)

    var newComponent = new Component({
        name: 'BreezeJS',
        url: 'http://www.breezejs.com'
    })

    console.log(newComponent.name)

    newComponent.save(function(err, newComponent) {
        if (err) return console.error(err);
    });
});