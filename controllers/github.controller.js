var services = require('../services/github.service');
var config = require('config');

module.exports = {
  searchProjects: (name) => {
    return new Promise((resolve, reject) => {
      services.getReposRelated(name).
        then(response => {
          resolve(response.data.items.map(x=>x.full_name).slice(0,config.github.limitprojects))
        })
        .catch(error => {
          //reject('ERROR')
          //showError(commit, error)
        })
    })
  }
}
