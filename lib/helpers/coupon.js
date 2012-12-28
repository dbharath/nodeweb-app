"use strict";

var coupon = {
  replaceNewLine: function (html) {
    return html.replace(/\n/g, ' ');
  },

  getSimpleDate: function(dt) {
    var month = dt.getMonth() + 1;
    month = (month < 10 ? '0' : '') + month;
    var day = dt.getDate();
    day = (day < 10 ? '0' : '') + day;
    return [
              dt.getFullYear(),
              month,
              day
            ].join('-'); 
  },

  defSimpleStartDate: function() {
    var current = new Date();
    return this.getSimpleDate(current);
  },

  defSimpleEndDate : function() {
    var current = new Date();
    var endDate = new Date();
    endDate.setDate(current.getDate() + 90);
    return this.getSimpleDate(endDate);
  },

  linkCreation: function (str) { 
    if(str.search('Watches') != -1){
      return "/watches.html?cat=345";
    } else if(str.search('Jewellery') != -1) {
      return '/fashion-jewellery.html';
    } else if(str.search('Lovable') != -1) {
      return '/lingerie.html?brand=3405&cat=';
    }else if(str.search('Bags') != -1) {
      return '/bags.html';
    } else{
      return '#';
    }
    return str;
  }
}

module.exports = coupon;

/*--------------------------Test Code------------------------*/
if (require.main == module) {
  console.log('Testing \n new \n line \n');
  console.log(coupon.replaceNewLine('Testing \n new \n line \n'));
}
