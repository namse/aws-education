const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('./model');

const app = express();
app.use(bodyParser.json());
app.use(morgan('tiny'))

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://test:test@ds153501.mlab.com:53501/lgcnsmsa');
const Analytics = mongoose.model('Analytics');

/**
 * logAnalytics - Gets all the request and feeds to our analytics
 * system
 *
 * @param  {} req Request
 * @return {Promise} promise
 */
function logAnalytics(req) {
  const url = req.originalUrl;
  const analytics = new Analytics({
      ip: req.ip,
      user: req.user,
      url,
  });
  return analytics.save();
}

app.post('/log', (req, res) =>
  logAnalytics(req.body)
  .then(() => res.sendStatus(200))
  .catch((err) => {
    console.log(err, err.stack);
    res.sendStatus(500);
  })
);

app.listen(12345);
