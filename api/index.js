module.exports = function (app) {
    app.use('/', require('../api/services/api_home'));
    app.use('/debug', require('./services/users'));
};
