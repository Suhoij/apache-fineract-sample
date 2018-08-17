import client from './apis/client';
import loan from './apis/loan';

import restRequest from './services/rest-request';
import config from './config';

const restRequestInstance = restRequest(config.request);

module.exports = () => {

  return Object.assign(
    client(restRequestInstance),
    loan(restRequestInstance),
  );

};
