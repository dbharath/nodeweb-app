"use strict";

var fsutils = require('./util');

var category = {
  imageRoot: '/images/catalog/category/',

  image_url: function (obj) {
    var filename = (obj) ? fsutils.getSKUPath(obj) : 'placeholder.jpg';
    return fsutils.static_url(this.imageRoot + filename);
  }
};

module.exports = category;


