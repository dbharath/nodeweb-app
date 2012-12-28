'use strict';
var util = require('util');
var User = require('../models/layoutModel');
var ututils = require('../lib/ututils');

function validateSignUp(user) {
  var errorMsg = '';
  if(!ututils.validateEmail(user.email)) {
    errorMsg = ' Invalid email address';
  } else if(user.password === '') {
    errorMsg = ' Password can not be blank. Please enter a password';
  } else if(!ututils.validatePasswordLength(user.password)) {
    errorMsg = ' Minimum length of password should be 6 characters';
  } else if(user.firstname && !ututils.validatePersonName(user.firstname)) {
    errorMsg = 'Only letters and numbers are allowed.';
  } else if(user.lastname && !ututils.validatePersonName(user.lastname)) {
    errorMsg = 'Only letters and numbers are allowed.';
  } else {
    return false;
  }
  return errorMsg;
}

var user = {

  follow: function(req, res, next) {
    var data = {
      'user_id': req.session.user.id,
      'friend_id': req.body.followUserId
    };
    User.insertFriend(data, function(err, result) {
      if(!err) {
        util.log("Successfully inserted into database" + result.insertId);
        req.message = "Successfully follwed user";

      } else {
        util.log("unable to insert in friend table" + err);
      }
      next();
    });
  },

  getFriends: function(req, res, next) {
    User.getFriends(req, function(err, result) {
      req.session.result = {};
      if(result && result.length > 0) {
        req.session.result = result;
      }
      next();
    });
  },

  getMessage: function(req, res, next) {
    var sql = 'select u.firstname, m.message from user_message as m join user as u on m.user_id = u.id where u.id in (' + 'select friend_id from friends where user_id=' + req.session.user.id + ') or u.id =' + req.session.user.id + ' order by m.created_at desc';
    User.db.query(sql, [], function(err, result) {
      req.session.message = {};
      if(result && result.length > 0) {
        req.session.message = result;
      } else if(result && result.length === 0) {
        req.session.message = "empty";
      } else {
        req.session.message = err;
      }
      req.message = (req.message) ? req.message : '';
      res.render('profile.ejs', {
        'result': req.session.result,
        'message': req.message
      });
    });
  },

  signin: function(req, res, next) {
    var userData = {
      email: req.body.femail,
      password: req.body.fpassword
    };
    User.checkUser(userData, function(err, result) {
      if(!err) {
        req.session.user = {};
        req.session.user.id = result.id;
        next();
      } else {
        util.log("Unable to login, Please try again");
        res.json({
          'msg': "Login Failed"
        });
      }
    });

  },

  validate: function(req, res, next) {
    var newuser = {
      email: req.body.email,
      firstname: req.body.fname,
      lastname: req.body.lname,
      primaryphone: req.body.phone,
      password: req.body.password
    };
    var validationMsg = validateSignUp(newuser);
    if(!validationMsg) {
      req.newuser = newuser;
      next();
    } else {
      util.error(validationMsg);
      req.error = validationMsg;
      next();
    }
  },
  signup: function(req, res, next) {
    var newuser = req.newuser;
    var source = req.url.split('?')[0];
    User.add(newuser, function(err, result) {
      if(err) {
        util.log('Email already in use: ' + newuser.email + ' url: ' + source);
        req.error = 'Email already in use';
        res.json({
          'error': err,
          'status': 'fail'
        });
      } else {
        req.session.user = {};
        req.session.user.id = result.insertId;
        util.log('Creating new account: ' + newuser.email + ' url: ' + source);
        next();
      }
    });
  },
  updateStatus: function(req, res, next) {
    var message = req.body.uploadData;
    var id = req.session.user.id;
    var data = {
      'user_id': id,
      'message': message,
      'created_at': ututils.currentTime()
    };
    util.log(util.inspect(data));
    User.pass_message(data, function(err, result) {
      next();
    });
  },
  logout: function(req, res) {
    if(req.session.user) {
      req.session.user = undefined;
    }
    res.render('index.ejs',{'result':'Logged out Successfully'});
  },
}

module.exports = user;