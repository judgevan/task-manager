const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
// const notFound = require('./middleware/not-found');
// const errorHandlerMiddleware = require('./middleware/error-handler');

// // middleware

// app.use(express.static('./public'));
// app.use(express.json());

// // routes
const port = process.env.PORT || 3000

app.use('/api/v1/tasks', tasks);

// app.use(notFound);
// app.use(errorHandlerMiddleware);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error);
  }
}

start();



// {{ for all vars in postman


/***
 * REST API
 * 
 * As we build servers, it becomes important to build an http interface, so that other apps which are most likely the frontend apps can interact with our data
 * 
 * REST stands for Representational State Transfer. It's the most popular API design pattern
 *  Combination of HTTP verbs, route paths and resources(data). It's a pattern of creating APIs. REST determines how the API looks like
 * JSON is a common format for receiving and sending data in REST API(JSON method instead of send) 
 * 
 * It allows users perform a CRUD operation on data as the API structure is built around that
 *  */ 

/**
 * MongoDB
 * NoSQL, Non relational DB
 * Unlike traditional database where there are rows and columns, data is simply stored as JSON and it doesn't matter how the data relates to each other.
 * Collections are used instead of tables(Group of Items)
 * Documents are used instead of rows(Single Item). This is a set of key-value pairs that can take datatypes like strings, arrays, number, boolean, objects, etc
 * Easy to understand and get started with
 * Offers free cloud hosting on Atlas(It can also be set up on the local machine)
 * Create an account with Atlas
 * Setup database access, network access, connection string that would be used to connect database to application(clusters), then connect with mongo's native drivers(min, 3.7 or later). database>cluster>browse collections>collections>then create your own database
 * 
 * Documents in mongodb represent one single item.
 * In mongodb, documents have a dynamic schema. This means documents in the same collection don't need to have the same set of fields or structure
 */

// RRtwe7sR$L3#3mZ
// mongodb+srv://judgevan:<password>@cluster0.fxtudph.mongodb.net/?retryWrites=true&w=majority

// skimmer is a model
// model is how u want ur data to look like
//mongodb is not relational database
//