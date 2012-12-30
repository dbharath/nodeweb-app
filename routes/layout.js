'use strict';
var signup = require('./signup');
module.exports = function (app) {
  app.get('/', function (req, res) {
    var accept = req.headers.accept || '';
      res.render('index.ejs', {
      });
  });
  app.post('/user/signupdetails',signup.validate,signup.signup,signup.getFriends,signup.getMessage);
  app.post('/user/signin',signup.signin,signup.getFriends,signup.getMessage);
  app.post('/user/follow',signup.follow,signup.getFriends,signup.getMessage);
  app.post('/user/updateStatus',signup.updateStatus,signup.getMessage);
  app.post('/user/logout', signup.logout);
};

