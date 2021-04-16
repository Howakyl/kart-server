const mongoose = require('mongoose');

const connectionString = 
  process.env.MONGODB_URI || 'mongodb://localhost:27017/shopping-kart';
const configOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
};

mongoose 
  .connect(connectionString, configOptions)
  .then(() => console.log('MongoDB successfully connected...'))
  .catch((err) => console.log(`MongoDb connection error: ${err}`));

  module.exports = {
    Item: require('./item')
  }