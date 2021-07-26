const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const app = express();
const schema = require('./schema/schema')

app.use('/graphql', graphqlHTTP({
    schema,
}))

app.listen(4000, () => {
    console.log("now listening for request on 4000");
})