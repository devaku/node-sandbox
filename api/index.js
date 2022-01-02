module.exports = function (app) {
    app.get('/', require('../api/services/api_home'));
};
