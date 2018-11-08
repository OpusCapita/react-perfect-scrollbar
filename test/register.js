require('babel-register')();
require('ignore-styles');
require('global-jsdom')(undefined, {
  url: 'http://localhost',
});
