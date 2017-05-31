const path = require('path');
const rootPath = path.normalize(__dirname + '/..');

const config = {
  db: 'mongodb://test:test@ds153501.mlab.com:53501/lgcnsmsa',
  root: rootPath,
  app: {
    name: 'Node Twitter'
  },
  github: {
    clientID: 'e3930cf94c772ba10ef1',
    clientSecret: 'fb1284b1874444a9c0c55c963092f836596ecc56',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  }
};

module.exports = {
  development: config,
  test: config,
  production: config,
};
