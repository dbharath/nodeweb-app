"use strict";

var fsutils = require('./util');

var brand = {

  imageRoot: '/images/catalog/brand/',

  image_url: function (obj) {
    var filename = (obj) ? fsutils.getSKUPath(obj) : 'placeholder.gif';
    return fsutils.static_url(this.imageRoot + filename);
  }

};

module.exports = brand;
