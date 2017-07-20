var axios = require('axios');
var config = require('config');

const URL_GITHUB_API = `https://api.github.com/`

const getReposRelated = keyword => {
  return axios.get(`${URL_GITHUB_API}`, {
    headers: {
      token: config.github.oauthtoken
    }
  })
}

module.exports = {
  getReposRelated
}
