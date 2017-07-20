var githubContr = require('./github.controller')

module.exports = {
  search: (word) => {
    githubContr.searchProjects(word)
  }
}
