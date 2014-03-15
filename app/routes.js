var Component = require('./models/component');

module.exports = function(app) {

  // get all components
  app.get('/api/components', function(req, res) {

    // use mongoose to get all components in the database
    Component.find(function(err, components) {

      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      if (err)
        res.send(err)

      res.json(components); // return all components in JSON format
    });
  });
};