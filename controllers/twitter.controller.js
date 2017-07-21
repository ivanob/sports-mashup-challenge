var services = require('../services/twitter.service');

module.exports = {
  findTweetsRelated: (projects) => {
    services.getTweetsRelated(projects)
  }
}
