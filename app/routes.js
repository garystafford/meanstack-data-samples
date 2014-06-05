// Code based on this example:
// http://scotch.io/tutorials/javascript/creating-a-single-page-todo-app-with-node-and-angular

var Component = require('./models/component');

module.exports = function (app) {

    // get all components
    app.route('/api/components')
        .get(function (req, res) {
            // use mongoose to get all components in the database
            Component.find(function (err, components) {

                // if there is an error retrieving, send the error.
                // nothing after res.send(err) will execute.
                if (err)
                    res.send(err);

                // return all components in JSON format
                res.json(components);
            });
        });
};