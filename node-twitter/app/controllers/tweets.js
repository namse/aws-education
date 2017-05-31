// ## Tweet Controller
const mongoose = require('mongoose');
const Tweet = mongoose.model('Tweet');
const logAnalytics = require('../../lib/logAnalytics');
const _ = require('underscore');

exports.tweet = (req, res, next, id) => {
  logAnalytics(req);
  Tweet.load(id, (err, tweet) => {
    if (err) {
      return next(err);
    }
    if (!tweet) {
      return next(new Error('Failed to load tweet' + id));
    }
    req.tweet = tweet;
    next();
  });
};

// ### New Tweet
exports.new = (req, res) => {
  logAnalytics(req);
  res.render('tweets/new', {
    title: 'New Tweet',
    tweet: new Tweet({})
  });
};

// ### Create a Tweet
exports.create = (req, res) => {
  logAnalytics(req);
  const tweet = new Tweet(req.body);
  tweet.user = req.user;
  tweet.uploadAndSave(req.files.image, err => {
    if (err) {
      res.render('tweets/new', {
        title: 'New Tweet',
        tweet: tweet,
        error: err.errors
      });
    } else {
      res.redirect('/');
    }
  });
};

// ### Edit Tweet
exports.edit = (req, res) => {
  logAnalytics(req);
  res.render('tweets/edit', {
    title: 'Edit' + req.tweet.title,
    tweet: req.tweet
  });
};

// ### Show Tweet
exports.show = (req, res) => {
  logAnalytics(req);
  res.render('tweets/show', {
    title: req.tweet.title,
    tweet: req.tweet
  });
};

// ### Update a tweet
exports.update = (req, res) => {
  logAnalytics(req);
  let tweet = req.tweet;
  tweet = _.extend(tweet, req.body);
  tweet.uploadAndSave(req.files.image, err => {
    if (err) {
      res.render('tweets/edit', {
        title: 'Edit Tweet',
        tweet: tweet,
        error: err.errors
      });
    } else {
      res.redirect('/');
    }
  });
};

// ### Delete a tweet
exports.destroy = (req, res) => {
  logAnalytics(req);
  const tweet = req.tweet;
  tweet.remove(err => {
    if (err) {
      return res.render('500');
    }
    res.redirect('/');
  });
};

exports.index = (req, res) => {
  logAnalytics(req);
  const page = (req.param('page') > 0 ? req.param('page') : 1) - 1;
  const perPage = 15;
  const options = {
    perPage: perPage,
    page: page
  };

  Tweet.list(options, (err, tweets) => {
    if (err) {
      return res.render('500');
    }
    Tweet.count().exec((err, count) => {
      if (err) {
        return res.render('500');
      }
      let followingCount = req.user.following.length;
      let followerCount = req.user.followers.length;
      res.render('tweets/index', {
        title: 'List of Tweets',
        tweets: tweets,
//        analytics,
        page: page + 1,
        pages: Math.ceil(count / perPage),
        followerCount: followerCount,
        followingCount: followingCount
      });
    });
  });
};
