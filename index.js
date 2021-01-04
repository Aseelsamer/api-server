'use strict';

const server = require('./lib/server');
require('dotenv').config();
server.start();

//call the .start method from the server 