import { expect } from 'chai';
import nock from 'nock';
import getClientResponse from './fixtures/client/getClient';
import getClientsListResponse from './fixtures/client/getClientsList';
import createClientResponse from './fixtures/client/createClient';
import fineract from '../index';
import config from '../config';

const fineractService = fineract();

describe('#fineractService', async () => {

  it('should return single client with id 1', async () => {

    try {

      nock(config.request.apiURL)
        .get('/clients/1?tenantIdentifier=default')
        .reply(200, getClientResponse);

      const result = await fineractService.getClient(1);
      expect(result.id).to.equal(1);

    } catch (error) {
      console.log('Err: ', error);
    }

  });

  it('should return 2 clients when retrieving the list for default tenant', async () => {

    try {

      nock(config.request.apiURL)
        .get('/clients?tenantIdentifier=default')
        .reply(200, getClientsListResponse);

      const result = await fineractService.getClientsList();
      expect(result.totalFilteredRecords).to.equal(2);


    } catch (error) {
      console.log('Err: ', error);
    }

  });

  it('should return clientId = 1 and resourceId = 1 when creating inactive client', async () => {

    try {

      nock(config.request.apiURL)
        .post('/clients?tenantIdentifier=default')
        .reply(200, createClientResponse);

      const result = await fineractService.createInactiveClient('Dmitriy', 'Lvov', 4);

      expect(result.clientId).to.equal(1);
      expect(result.resourceId).to.equal(1);

    } catch (error) {
      console.log('Err: ', error);
    }

  });

  it('should return clientId = 1 and resourceId = 1 when creating active client', async () => {

    try {

      nock(config.request.apiURL)
        .post('/clients?tenantIdentifier=default')
        .reply(200, createClientResponse);

      const result = await fineractService.createActiveClient('Dmitriy', 'Lvov', 4);

      expect(result.clientId).to.equal(1);
      expect(result.resourceId).to.equal(1);

    } catch (error) {
      console.log('Err: ', error);
    }

  });

  it('should return clientId = 1 and resourceId = 1 when creating inactive client with address', async () => {

    try {

      nock(config.request.apiURL)
        .post('/clients?tenantIdentifier=default&enable-address=true')
        .reply(200, createClientResponse);

      const result = await fineractService.createInactiveClientWithAddress('Dmitriy', 'Lvov', 4, {
        addressTypeId: 1,
        isActive: true,
        street: 'Viazov',
        stateProvinceId: 3,
        countryId: 2,
      });

      expect(result.clientId).to.equal(1);
      expect(result.resourceId).to.equal(1);

    } catch (error) {
      console.log('Error: ', error);
    }

  });

  it('should return clientId = 1 and resourceId = 1 when creating active client with address', async () => {

    try {

      nock(config.request.apiURL)
        .post('/clients?tenantIdentifier=default&enable-address=true')
        .reply(200, createClientResponse);

      const result = await fineractService.createActiveClientWithAddress('Dmitriy', 'Lvov', 4, {
        addressTypeId: 1,
        isActive: true,
        street: 'Viazov',
        stateProvinceId: 3,
        countryId: 2,
      });

      expect(result.clientId).to.equal(1);
      expect(result.resourceId).to.equal(1);

    } catch (error) {
      console.log('Error: ', error);
    }

  });

});
