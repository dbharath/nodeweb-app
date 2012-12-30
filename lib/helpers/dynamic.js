
var helpers = {

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
