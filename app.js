//app.js 
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const app = express();
// bind express with graphql
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));
app.listen(2020, () => {
    console.log('Now listening at port 2020');
});