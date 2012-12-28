var util = require('util');
var ututils = require('../ututils');
var querystring = require('querystring');

var contact = require('../../config').contact_options;
var ututils = require('../ututils');

// Constant filtering URL
var categoryFilterBaseURL = '/catalog/brand/';


var staticHelpers = {


  filter_link: function(query,filter) {
    delete query['page'];
    var key, queryFilter = {};
    
    for(key in filter) {
      if (filter.hasOwnProperty(key) && filter[key] !== '') {
        queryFilter[key] = filter[key];
      }
    }
    
    for(key in query) {
      if (query[key] && !filter.hasOwnProperty(key)) {
        queryFilter[key] = query[key];
      }
    }

    return ('?' + querystring.stringify(queryFilter));
  },


  attribute_filter_link: function(query,filter) {
    delete query['page'];
    var key, queryFilter = {};

    for(key in filter) {
      if (filter.hasOwnProperty(key) && filter[key] !== '') {
        queryFilter[key] = filter[key];
      }
    }

    for(key in query) {
      if (!filter.hasOwnProperty(key)) {
        queryFilter[key] = query[key];
      }
      else {
        var splittedKey = query[key].split('|');
        var add = true;
        for (var idx in splittedKey){
          if (splittedKey[idx].trim() === queryFilter[key]){
            add = false;
            break;
          }
        }
        if (add){
          queryFilter[key] = splittedKey.join('|')+'|'+queryFilter[key];
        }
        else {
          queryFilter[key] = splittedKey.join('|');
        }
      }
    }

    return '?' + querystring.stringify(queryFilter);
  },
  attribute_filter_unlink: function(query,filter,attribute_filtername) {
    var clonedQuery = ututils.cloneObject(query);
    var attribute_queryfilter = clonedQuery[attribute_filtername].split('|');
    var attribute_to_remove = filter[attribute_filtername];
    for (var idx=0 ; idx < attribute_queryfilter.length;idx++) {
      if(attribute_queryfilter[idx].trim() === attribute_to_remove){
        attribute_queryfilter.splice(idx,1);
        break;
      }
    }
    
    clonedQuery[attribute_filtername] = attribute_queryfilter.join('|');
    if (!clonedQuery[attribute_filtername]) {
      delete clonedQuery[attribute_filtername];
    }
    return this.attribute_filter_link(clonedQuery,{});
  },


  
  
  /**
   * Return an URL link that's used in filtering the 'All Brands' page by a specific category.
   * All categories are able to have links except the main one with id = 0.
   * 
   * @param   {Object} - category - A category object that holds the category id and label
   * @returns {String}
   */
  getCategoriesFilterLink: function (category) {
    
    // Set a default link to show all brands
    var link = categoryFilterBaseURL + 'all';
    
    // Check if we deal with top root category or a child one
    if (category.id) {
      link = categoryFilterBaseURL +'list/'+ category.id +'/'+ ututils.getUserURL(category.label);
    }
    
    return link;
  },
  
  
  showInNavigator: function (ary) {
    if (ary) {
      for (var idx = 0; idx < ary.length; idx++) {
        var key = ary[idx];
        if (!(key.applied && ('yes' === key.applied.toLowerCase()))) {
          return true;
        }
      }
    }
    return false;
  },
  
  mainCatApplied: function (ary) {
    if (ary) {
      for (var idx = 0; idx < ary.length; idx++) {
        var key = ary[idx];
        if (key.applied && ('yes' === key.applied.toLowerCase())) {
          return key.label;
        }
      }
    }
    return null;
  },


  productHelper : require('./product'),
  brandHelper   : require('./brand'),
  categoryHelper: require('./category'),
  orderHelper: require('./order'),
  staticUrlHelper: require('./util'),


  fetchStateNameList: function () {
    return Regions.list;
  },

  currency: function (num) {
    if(typeof num === 'string')
      return parseFloat(num).toFixed(2);
    return num.toFixed(2);
  },

  currencyWithoutDecimal: function (num) {
    if(typeof num === 'string')
      return parseFloat(num).toFixed();
    return num.toFixed();
  },

  displayUserName: function (name) {
    if (name.length > 22) {
      return name.substring(0, 19) + '...';
    }
    return name;
  },
  
  displayProductName: function(name) {
    if(name.length > 50) {
      return name.substring(0,49) + '...';
    }
    return name;
  },

  displayFJWidgetProductName: function(name) {
    if(name.length > 32) {
      return name.substring(0,31) + '...';
    }
    return name;
  },

  getOrderStatus : function(){
    return Order.status;
  },

  generateWishlistLink: function(wishlist_id) {
    return 'http:' + contact.store_url + '/wishlist/' + wishlist_id;

  },

  contact_phone: contact.phone,

  contact_email: contact.email,

  contact_times: contact.times,
  
  couponHelper: require('./coupon'),

  ututils: ututils,

  shuffle: function (myArray) {
    var i = myArray.length;
    if (i === 0) return myArray;
    while (--i) {
      var j = Math.floor(Math.random() * (i + 1));
      var tempi = myArray[i];
      var tempj = myArray[j];
      myArray[i] = tempj;
      myArray[j] = tempi;
    }
    return myArray;
  }
};

module.exports = staticHelpers;

// ----------------------------------------------------------------------------
if (require.main === module) {
  (function () {
    function logcb(err, obj) {
      util.log(err || util.inspect(obj));
      process.exit(0);
    }
    util.log(staticHelpers.image_url('/5204989008162_1_fi.jpg'));
  })();
}
