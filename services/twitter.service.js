var axios = require('axios');
var config = require('config');
var Twitter = require('twitter-node-client').Twitter;

var error = function (err, response, body) {
  console.log('Error [%s]', err);
};
var success = function (data) {
  var dataObj = JSON.parse(data)
  console.log('Project Name: ', dataObj['search_metadata']['query'], "\n");
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
