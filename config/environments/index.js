module.exports = function (app) {
    require('./development')(app);
    require('./test')(app);
    require('./production')(app);
    require('./travis')(app);
};