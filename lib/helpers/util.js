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

  getSKUPath: function (file) {
    var filename = file.substring(file.lastIndexOf('/') + 1);
    var d1 = filename.substring(0, 1);
    var d2 = filename.substring(0, 2);
    var d3 = filename.substring(0, filename.indexOf('_'));
    var d4 = filename.substring(filename.indexOf('_') + 1);
    var newPath = [d1, d2, d3, d4].join('/');

    return newPath;
  },

  quickShopLink: function (value) {
    var link = '/landing-pages/shipping-saver.html?price=';
    if (util.between(value, 0, 99)) {
      link += 201 + '%2C' + 450;
    } else if (util.between(value, 100, 149)) {
      link += 151 + '%2C' + 300;
    } else if (util.between(value, 150, 189)) {
      link += 111 + '%2C' + 225;
    } else if (util.between(value, 190, 239)) {
      link += 61 + '%2C' + 165;
    } else if (util.between(value, 240, 299)) {
      link += 61 + '%2C' + 120;
    }
    var options = '&order=price&dir=ASC';
    return link + options;
  },

  between: function (val, min, max) {
    return Number(val) >= Number(min) && Number(val) <= Number(max);
  }
};

module.exports = util;
