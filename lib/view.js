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
      'title'       : 'UrbanTouch.com - Beauty | Fashion - Delivered at your doorstep!',
      'description' : 'UrbanTouch.com - Online Shopping for Beauty & Fashion Products in India. ' +
                      'Buy Cosmetics, Fragrances, Skin Care, Hair Care, Watches, Bags, Fashion Jewellery Products in India. ' +
                      'Free Shipping. Express Delivery across India. Pay Cash on Delivery of Products. 100% Original Products Guaranteed.',
      'keywords'     : 'Urbantouch,shopping,india'
    },
    'css'        : [],
    'js'         : [],
    'categories' : undefined,
    'canonical_url': undefined,
    'headerscript' : 'layout/analytics',
    'searchTerm'   : '',
    'ga_id'        : config.analytics? config.analytics.ga_id : ''
  };

  app.set("view engine","ejs");
  app.set("view options",options);
  console.log('ppppppppppp');
  app.helpers(require('./helpers'));
  app.dynamicHelpers(require('./helpers/dynamic'));

};
