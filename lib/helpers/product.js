"use strict";

var cdn_options = require('../../config').cdn_options;
var fsutils = require('./util');
var ututils = require('../ututils');

var product = {
  imageRoot: '/images/catalog/product/',

  image_url: function (obj) {
    var filename = (obj) ? fsutils.getSKUPath(obj) : 'placeholder.jpg';
    return fsutils.static_url(this.imageRoot + filename);
  },
  image_url_resize: function(obj,width,height) {
    var filename = fsutils.getSKUPath(obj);
    return fsutils.static_url('/' + cdn_options.path + '/' + width + 'x' + height + '/catalog/product/' + filename);
  },
  view_url: function(url_key,sku) {
    return "/"+url_key+'/'+sku+"/p/";
  },
 //This helper basically add http to the url for images for external frames(fb etc.)
 image_url_extern : function(webhost,imgurl){
   if (ututils.startsWith('//', imgurl)) {
     imgurl = webhost.substr(0, webhost.indexOf('/')) + imgurl;
   }
   return imgurl;
 },
  getParsedProduct: function(prod){
    try {
      prod.parsedInfo = JSON.parse(prod.info);
      if(prod.parsedInfo && prod.parsedInfo.hoverImg) {
        prod.parsedInfo.hoverImg = prod.sku+'_'+ prod.parsedInfo.hoverImg;
      }
    }
    catch(e){
    }
    return prod;
  },
  //This helper add products from begining to the end of list so that the total count is in multiplication of per frame count
  carousalHelper : function(products) {
    var prodPerCarousalFrame = 5;
    if (products && products.length > 0) {
      if (products.length > prodPerCarousalFrame) {
        var voidSpace = (products.length % prodPerCarousalFrame) ? prodPerCarousalFrame - (products.length % prodPerCarousalFrame) : 0;
        var fillers = products.slice(0, voidSpace);
        products = products.concat(fillers);
      } else {
        prodPerCarousalFrame = products.length;
      }
    } else {
      products = undefined;
    }
    var retObj =  {
        products:products,
        prodPerCarousalFrame : prodPerCarousalFrame
        };
    return retObj;
  }
};

module.exports = product;

if (require.main == module) {
  console.log(product.image_url_resize('/KNA0000000183_0_li.jpg',126,135));
}
