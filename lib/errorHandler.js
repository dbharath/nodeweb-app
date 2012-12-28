"use strict";
var logger = require('./logger');
var util = require('util');

exports = module.exports = function errorHandler(options){
  options = options || {};
  // defaults
  var dumpExceptions = options.dumpExceptions;
  var showStack = options.showStack;
  var validErrorCodes = { '500': true, '404': true, '401': true };

  return function errorHandler(err, req, res, next){
    var locals;
    var accept = req.headers.accept || '';
    res.statusCode = err.status || 500; 

    if (!(res.statusCode in validErrorCodes))
      res.statusCode = 500;
    
    locals = { status: res.statusCode, err: err, url: req.url };

    if (dumpExceptions) {
      try {
        logger.log(req.originalUrl + ' [' + res.statusCode + '] headers=>:' + JSON.stringify(req.headers),'errorHandler');
      } catch(e) {
        process.exit(3);
      }
    }

    if (res.statusCode == 500)
      locals.layout = false;

    // html
    if (~accept.indexOf('html')) {
      locals.err.stack = (showStack)?err.stack:undefined;
      console.log(locals.err.stack);
      try {
        return res.render('error/' + res.statusCode,locals);
      } catch(e) {
        // do nothing - just send plaintext response
      }
    } 
    
    if (~accept.indexOf('json')) {
      var json = JSON.stringify({ error: err });
      res.setHeader('Content-Type', 'application/json');
      res.end(json);
      // plain text
    } else {
      res.writeHead(res.statusCode, { 'Content-Type': 'text/plain' , layout: false });
      res.end(err.message);
    }
  };
};
