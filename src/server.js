import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { itemResolver } from './resolvers/itemResolver';
import { kartResolver } from './resolvers/kartResolver';
import { typeDefs }  from './typeDefs/typeDefs';

const app = express();
const PORT = 5000;

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers: [itemResolver, kartResolver],
  });

  server.applyMiddleware({ app });

  const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/shopping-kart';
  const configOptions = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
};
  await mongoose 
    .connect(connectionString, configOptions)
    .then(() => console.log('MongoDB successfully connected...'))
    .catch((err) => console.log(`MongoDb connection error: ${err}`));

    app.listen(PORT, () => console.log(`Server running on PORT:${PORT}`));
}


startServer();