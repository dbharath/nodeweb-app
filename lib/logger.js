"use strict";

var util = require('util');

var logger = {

  init: function(key) {
    if (key && config) {
    }
  },

  log: function(msg,tag) {
    if (typeof(msg) == 'object') {
        msg = util.inspect(msg);
    }
    util.log(msg);
  },

  handle: function(err) {
    if (err) {
      util.log('Exception: ' + err.stack);
    }
  }

};

module.exports = logger;

if (Object.keys(config).length == 0) {
  // when the amon server is not available
  logger.log = function(msg) { 
    if (typeof(msg) == 'object') 
      msg = util.inspect(msg); 
    util.log(msg);
  };
  logger.handle = function(e) { util.log('Exception: ' + e); };
}

