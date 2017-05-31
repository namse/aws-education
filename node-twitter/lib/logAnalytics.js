const fetch = require('node-fetch');

function logAnalytics(req) {
  return fetch('http://127.0.0.1:12345/log', {
    method: 'POST',
    body: JSON.stringify({
      ip: req.ip,
      originalUrl: req.originalUrl,
      userID: req.user._id,
    }),
  })
  .then(() => console.log('success'))
  .catch(err => console.log(err, err.stack));
}

module.exports = logAnalytics;
