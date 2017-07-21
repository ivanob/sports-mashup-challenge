var services = require('../services/twitter.service');

module.exports = {
  findTweetsRelated: (projects) => {
    console.log('tweets: ' + projects)
    console.log(services.getTweetsRelated(projects))
  }
}
