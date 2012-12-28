var util = require('util');
var Model = require('./model');
var ututils = require('../lib/ututils');

function Friend() {
  Model.call(this, 'friends');
}

util.inherits(Friend, Model);
var Friend = new Friend();

function User() {
  Model.call(this, 'user');
}

util.inherits(User, Model);

var User = new User();

function friendInfo() {
  var table = 'user';
  var joinTable = [{
    table: 'friends',
    type: 'JOIN',
    onClause: ['user.id = friends.user_id']
  }];

  Model.call(this, table, joinTable);
};

util.inherits(friendInfo, Model);
var friendInfo = new friendInfo();

function messageTable() {
  Model.call(this, 'user_message');
}

util.inherits(messageTable, Model);
var messageTable = new messageTable();

User.pass_message = function(data,callback)
{
  messageTable.insert(data,function(err,ret){
    if(!err) {
    util.log("sucessfully inserted in database" + ret.insertId);
    callback(null,ret);
    }
    else
    {
    util.log("failed to insert into database" + err);
    callback(err,null);
  }
  });
}


User.getFriends = function(req, callback) {
  var sql = 'select * from user where id not in (select friend_id from friends where user_id =' + req.session.user.id+') and id != '+ req.session.user.id;
  var filters = {
    user_id : req.session.user.id
  };
  
  friendInfo.db.query(sql, [], function(err, result) {
    if(!err && result && result.length > 0) {
      callback(err, result);
    } else {    
      util.log("unable to fetch Friends list" + err);
      callback(err);
      }
  });
};

User.authenticate = function(email, password, callback) {

  var options = null;
  var filters = {
    email: email
  };

  User.select(filters, options, function(err, result) {
    if(!err && result && result.length === 1) {
      var user = result[0];
      if(!user.isactive) {
        util.log('User ' + email + ' has been disabled.');
        err = new Error('User has been disabled.');
        err.msg_code = 'user-disabled';
        callback(err, user);
      } else {
        if(user.password && '' !== user.password) {
          callback(err, user);
        }
      }
    } else {
      util.log("Failed email attempt for user: " + email);
      if(!err) {
        err = new Error('Bad Password');
      }
      err.msg_code = 'login-failed';

      callback(err, undefined);
    }
  });
};


User.add = function(userobj, callback) {
  var filters = {
    email: userobj.email
  };
  var userDetails = {
    'firstname': userobj.firstname,
    'email': userobj.email,
    'password': userobj.password,
    'created_at': ututils.currentTime(),
    'isactive': 1
  };
  User.insert(userDetails, function(err, result) {
    if(!err) {
      callback(null, result);
    } else {
      callback(new Error('DB Insertion failed'), null);
    }
  });
};

User.checkUser = function(data, callback) {
  var options = null;
  var filters = {
    'email': data.email,
    'password': data.password
  };
  fetchUser(filters, options, callback);
}

function fetchUser(filters, options, callback) {  
  User.select(filters, options, function(err, result) {
    var user;
    if(result && result.length == 1) {
      user = result[0];
    } else if(!err) {
      err = new Error('Not Found');
    }
    callback(err, user);
  });
}

User.insertFriend = function(data,callback){
   Friend.insert(data,function(error,result){
     if(!error){
        callback(null,result);
     } else {
       callback(new Error('DB Insertion failed in friend table'),null)
     }

   });
}

module.exports = User;

/* ------ Test Code -------- */

if(require.main == module) {
  (function() {
    User.select(null, function(err, info) {
      if(err) {
        util.log('error: ' + err);
      } else {
        util.log(util.inspect(info));
      }
    });
  }());
}