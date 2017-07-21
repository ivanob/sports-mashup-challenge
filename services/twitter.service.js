var axios = require('axios');
var config = require('config');
var Twitter = require('twitter-node-client').Twitter;

var error = function (err, response, body) {
  console.log('ERROR [%s]', err);
};
var success = function (data) {
  console.log('Data [%s]', data);
};

var config = {
   "consumerKey": config.twitter.consumerKey,
   "consumerSecret": config.twitter.consumerSecret,
   "accessToken": config.twitter.accessToken,
   "accessTokenSecret": config.twitter.accessTokenSecret,
   "callBackUrl": config.twitter.callBackUrl
}

var twitter = new Twitter(config);

const getTweetsRelated = keyword => {
  return twitter.getSearch({'q':'#haiku','count': 10}, error, success);
}

module.exports = {
  getTweetsRelated
}
