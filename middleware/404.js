'use strict';

function notFoundHandler(req, res, next) {
    res.status(404);
    res.json({error: 'Not Found!'});
    
}

module.exports = notFoundHandler;