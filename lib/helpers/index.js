var util = require('util');
var ututils = require('../ututils');
var querystring = require('querystring');

var contact = require('../../config').contact_options;
var ututils = require('../ututils');


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
  
  staticUrlHelper: require('./util'),

  displayUserName: function (name) {
    if (name.length > 22) {
      return name.substring(0, 19) + '...';
    }
    return name;
  },
  
  contact_phone: contact.phone,

  contact_email: contact.email,

  contact_times: contact.times,
  
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
