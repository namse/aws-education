/**
 * Module dependencies
 */
const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');
const helpers = require('view-helpers');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

module.exports = (app, config, passport) => {
  app.set('showStackError', true);

  app.use(express.static(config.root + '/public'));

  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('dev'));
  }

  app.set('views', config.root + '/app/views');
  app.set('view engine', 'jade');

  app.use(helpers(config.app.name));
  app.use(cookieParser());

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use(session({
    secret: 'noobjs',
    store: new MongoStore({
      url: config.db,
      collection: 'sessions'
    }),
    resave: false,
    saveUninitialized: false,
  }));

  app.use(flash());

  app.use(passport.initialize());
  app.use(passport.session());

  app.use((err, req, res, next) => {
    console.log(err, err.stack);

    res.status(500).render('500', {error: err.stack});
  });
};
