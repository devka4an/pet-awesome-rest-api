require('dotenv').config('.env')
const express = require('express')
const mongoose = require('mongoose');
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.Promise = global.Promise;
const connectionUrl = "mongodb+srv://ka4an:parolotdb@cluster0.ehbnp.mongodb.net/todo";
mongoose.connect(connectionUrl, { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true 
}); 
require('./models/Tasks');

const routes = require('./routes'); 
routes(app);

module.exports = { app }