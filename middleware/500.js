'use strict';

function errorHandler(err, req, res, next) {
    res.status(500); // internal server error status code
    res.json({error: 'We have an issue we will fix it soon!'});
 
}

module.exports = errorHandler;