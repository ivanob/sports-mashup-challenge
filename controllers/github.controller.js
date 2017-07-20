var services = require('../services/github.service');

module.exports = {
  searchProjects: (name) => {
    console.log('Projects: ' + name)
    services.getReposRelated(name).
      then(response => {
        console.log(response.data.items)
      })
      .catch(error => {
        console.log('ERROR')
        //showError(commit, error)
      })
  }
}
