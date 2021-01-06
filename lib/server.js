'use strict';

const express = require('express');
const server = express();
const cors = require('cors');
const morgan = require('morgan');
const catRoutes = require('../routes/categories.js');
const proRoutes = require('../routes/products.js');


//middleware
const timestamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const notFound = require('../middleware/404');
const serverError = require('../middleware/500');

//import into the server
server.use(express.json());
server.use(timestamp);
server.use(logger);
server.use(morgan('dev'));
server.use(cors());
server.use(proRoutes);
server.use(catRoutes);
server.use(notFound);
server.use(serverError);



//.start method
module.exports = {
    server: server,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        server.listen(PORT, () => console.log(`listening on ${PORT}`))
    }
}
