
var helpers = {
  cartItems: function (req, res) {
    if (req.session.cart)
      return req.session.cart.count || 0;

    return 0;
  },

  wlcount: function(req, res) {
    if(req.session.user) {
      return req.session.user.wlcount || 0;
    }
    return 0;

  },

  session: function (req, res) {
    return req.session;
  },

  flash: function (req, res) {
    return req.flash();
  },

  query: function(req, res) {
    return req.query;
  },
  
  webhost: function(req, res) {
    return 'http' + (('https' === req.header('X-Forwarded-Proto')) ? 's' : '') + '://' + req.headers.host;
  }

};

module.exports = helpers;
