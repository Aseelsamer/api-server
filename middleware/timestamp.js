'use strict';

var requestTime = function (req, res, next) {
    req.requestTime = Date.now()
    next()
  }

module.exports = requestTime;