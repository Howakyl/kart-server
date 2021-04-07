const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
const app = express();
const PORT = 5000;
const data = require('./items.json');
const  db = require('./models');

const router = require('express').Router();


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

const index = (req, res) => {
  db.Item.find({})
  .then(foundItems => {
    res.json({ items: foundItems });
  })
  .catch(err => {
    console.log('error: ', err)
    res.json({ Error: 'unable to reach data.'})
  })
}
console.log(db.Item)
const home = router.get('/', index);
app.use('/items', home);

app.use('/graphql', graphqlHTTP({
  graphiql: true,
  schema: schema
}))
app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));

