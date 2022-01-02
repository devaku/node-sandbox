module.exports = function (app) {
    app.get('/', require('../api/services/api_home'));
    app.use('/graphql', require('../api/services/api_graphql'));
};
