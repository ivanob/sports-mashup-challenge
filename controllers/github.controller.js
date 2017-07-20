var services = require('../services/github.service');

module.exports = {
  searchProjects: (name) => {
    console.log('Projects: ' + name)
    services.getReposRelated('aaa').
    then(response => {
      console.log(response)
    })
    .catch(error => {
      console.log('ERROR')
      //showError(commit, error)
    })
  }
}
