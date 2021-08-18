const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./typeDefs/typeDefs");
const resolvers = require("./resolvers/resolvers");
const mongoose = require("mongoose");
require("dotenv").config();

async function startServer() {
  const app = express();

  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app: app, path: "/apollo" });

  app.use((req, res) => {
    res.send("Visit the <a href='/apollo' >/apollo</a> route to get the graphql UI.");
  });

  mongoose
    .connect(process.env.MONGO_KEY, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => {
      console.log("Successfully connected to Database");
      app.listen(process.env.PORT || 3000, () => {
        console.log(`Apollo graphql server is running on port: ${process.env.PORT || 3000}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

startServer();
