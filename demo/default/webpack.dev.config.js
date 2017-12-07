var config = require('./webpack.config.js');

config.resolve.alias['datavisual'] = '../../src/index';

module.exports = config;
