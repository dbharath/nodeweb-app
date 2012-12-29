"use strict";

var util = require('util');
var config = require('../config').amon;
var amon_ = require('amon').Amon;

var logger = {
  amon: amon_,

  init: function(key) {
    if (key && config) {
      this.amon.app_key = key;
      this.amon.host = config.host || 'localhost';
      this.amon.port = config.port || 2464;
    }
  },

  log: function(msg,tag) {
    var amon = this.amon;
    if (typeof(msg) == 'object') {
        msg = util.inspect(msg);
    }
    util.log(msg);
    tag && amon.log(msg,tag);
  },

  handle: function(err) {
    var amon = this.amon;
    if (err) {
      util.log('Exception: ' + err.stack);
      amon.handle(err);
    }
  }

};

module.exports = logger;

