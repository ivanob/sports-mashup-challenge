var services = require('../services/github.service');

module.exports = {
  searchProjects: (name) => {
    console.log('Projects: ' + name)
    services.getReposRelated('aaa')
  }
}
