const mongoose = require('mongoose')

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
}

module.exports = connectDB

// const connectionString = 'mongodb+srv://<username>:<password>@cluster0.zw2cfyo.mongodb.net/?retryWrites=true&w=majority';