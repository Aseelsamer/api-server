'use strict';
const mongoose = require('mongoose');
const server = require('./lib/server');
require('dotenv').config();
server.start();

// const MONGODB_URI = 'mongodb://localhost:27017/lab8';

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

