'use strict';
require('dotenv').config();

const mongoose = require('mongoose');
const server = require('./lib/server');
server.start();

const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

