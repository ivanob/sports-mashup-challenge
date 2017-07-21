var githubContr = require('./github.controller')
var twitterContr = require('./twitter.controller')

module.exports = {
  search: (word) => {
    githubContr.searchProjects(word)
    .then(response => {
      response.map(project => twitterContr.findTweetsRelated(project))
    })
    .catch(error => {
      Boom.serverUnavailable('Error [' + error + ']')
    })
  }
}
