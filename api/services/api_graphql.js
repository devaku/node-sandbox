const express = require('express');
const router = express.Router();
const { graphqlHTTP } = require('express-graphql');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'HelloWorld',
        fields: () => ({
            message: {
                type: GraphQLString,
                resolve: (parent, args) => 'Hello World',
            },
        }),
    }),
});

/**
 * We have a QUERY called "HelloWorld"
 * With FIELDS inside it.
 * The field currently is MESSAGE, a STRING TYPE, and it returns the value of 'Hello World'
 */

router.use(
    '/',
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

module.exports = router;
