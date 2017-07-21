var axios = require('axios');
var config = require('config');
var Boom = require('boom');
var Twitter = require('twitter-node-client').Twitter;

var error = function (err, response, body) {
  Boom.serverUnavailable('Error [' + err + ']')
};
var success = function (data) {
  var dataObj = JSON.parse(data)
  console.log('Project Name: ', decodeURIComponent(dataObj['search_metadata']['query']), '\n');
  console.log('Recent tweets published about this project:');
  dataObj['statuses'].map(tweet => {
    console.log(' -', tweet['user']['name'], ': ', tweet['text'])
    console.log('[Published on', tweet['created_at'], ']\n')
  })
  console.log('--------------------------------------------------\n')
};

var config = {
   "consumerKey": config.twitter.consumerKey,
   "consumerSecret": config.twitter.consumerSecret,
   "accessToken": config.twitter.accessToken,
   "accessTokenSecret": config.twitter.accessTokenSecret,
   "callBackUrl": config.twitter.callBackUrl
}

var twitter = new Twitter(config);

const getTweetsRelated = projectName => {
  return twitter.getSearch({'q':projectName,'count': 10}, error, success);
}

module.exports = {
  getTweetsRelated
}
