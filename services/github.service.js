var axios = require('axios');

const URL_GITHUB_API = `https://api.github.com/`

const getReposRelated = keyword => {
  return axios.get(`${URL_GITHUB_API}`, {
    headers: {
      token: '8cf2fdd1388c52275526b93053d2fc4ec0766904'
    }
  })
}

module.exports = {
  getReposRelated
}
