import axios from 'axios';

module.exports = (config) => {

  return axios.create({
    baseURL: config.apiURL,
    params: {
      tenantIdentifier: config.tenantIdentifier,
    },
    auth: {
      username: config.authentication.username,
      password: config.authentication.password,
    },
  });

};
