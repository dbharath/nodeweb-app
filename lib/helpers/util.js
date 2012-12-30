"use strict";

var config = require('../../config');

var util = {

  static_url: function (url) {
    var cdn_server = config.cdn || '';
    if (config.cdns && config.cdns.length) {
      var index = url ? url.length % config.cdns.length : 0;
      cdn_server = config.cdns[index];
    }
    return cdn_server + url;
  },

  between: function (val, min, max) {
    return Number(val) >= Number(min) && Number(val) <= Number(max);
  }
};

module.exports = util;
