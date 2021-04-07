const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
const app = express();
const PORT = 5000;
const items = require('./items.json');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: { 
        type: GraphQLString, 
        resolve: () => 'HelloWorld'
      }
    })
  })
})

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema
}))
app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));

