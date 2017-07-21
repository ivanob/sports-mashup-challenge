var githubContr = require('./github.controller')
var twitterContr = require('./twitter.controller')

module.exports = {
  search: (word) => {
    //githubContr.searchProjects(word)
    twitterContr.findTweetsRelated('aaa')
  }
}
