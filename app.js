"use strict";

var util = require('util');
var config = require('./config');
var express = require('express');
var logger = require('./lib/logger');
var urlmapper = require('./lib/urlmapper');
var errorHandler = require('./lib/errorHandler');


var app = express.createServer();

app.set('port' ,process.env.port || config.port);

app.configure(function () {
  app.set('root', __dirname);

 require('./lib/view')(app);   // view settings
  app.set('views', __dirname + '/views');
  app.enable('jsonp callback');

  app.use(express.bodyParser());
  app.use(express.cookieParser());
  app.use(express.favicon(__dirname + '/public/images/favicon.ico', {
      maxAge: 2592000000
  }));

  /* TODO: In dev, use urlmapper.create, in prod use urlmapper.router */
  //app.use(urlmapper.create({ debug: true }));

  express.logger.token('istDate', function (req, res) {
    return new Date();
  });

  express.logger.token('user', function (req, res) {
    return (req.session && req.session.user) ? req.session.user.email 
                                             : req.headers['x-real-ip'] || req.connection.remoteAddress ;
  });

});

app.configure('development', function () {
  app.use(express.session({
      secret: '1a2b3c4d5e6f'
  }));
  app.use(express.static(__dirname + '/public'));
  app.use(express.logger('dev'));
  app.use(app.router);
  app.disable('auth');
  app.use(errorHandler({
      dumpExceptions: true,
      showStack: true
  }));
});

require('./routes')(app);

app.listen(app.get('port'));
logger.log("Node Server[" + process.pid + "] listening on port " + config.port + " in " + app.settings.env,'init');

exports.app = app;

