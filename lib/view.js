"use strict";

var config = require('../config');

module.exports = function(app) {

  var options = {
    'environment' : app.settings.env,
    'forcehttp'   : config.forcehttp,
    'hidetopbar'  : false,
    'style'       : 'container',
    'redir'       : '',
    'meta'        : {
      'title'       : 'Micro Blogging Site-- Get Connected',
      'description' : 'Follow your friends, stay updated with their status', 
      'keywords'     : 'blog,stay connected'
    },
    'css'        : [],
    'js'         : [],
    'categories' : undefined,
    'canonical_url': undefined,
    'searchTerm'   : ''
  };

  app.set("view engine","ejs");
  app.set("view options",options);
  app.helpers(require('./helpers'));
  app.dynamicHelpers(require('./helpers/dynamic'));

};
