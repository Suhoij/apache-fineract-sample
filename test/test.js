import { expect } from 'chai';
import nock from 'nock';
import getClientResponse from './fixtures/client/getClient';
import getClientsListResponse from './fixtures/client/getClientsList';
import fineract from '../index';
import config from '../config';

const fineractService = fineract();

describe('#fineractService', async () => {

  it('should receive single client with id 1', async () => {

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

  it('should receive 2 clients in the response for default tenant', async () => {

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

  // it('should receive single client with id 1', async () => {
  //
  //   try {
  //
  //     nock('https://demo.openmf.org/fineract-provider/api/v1/')
  //       .get('/clients/2?tenantIdentifier=default')
  //       .reply(200, getClientResponse);
  //
  //     const result = await fineractService.getClient(1);
  //     expect(result.id).to.equal(1);
  //
  //     // var result = await fineractService.getClientsList();
  //     // var result = await fineractService.createInactiveClient('Dmitriy', 'Lvov', 4);
  //     // const result = await fineractService.createInactiveClientWithAddress('Dmitriy', 'Lvov', 4, {
  //     //   addressTypeId: 1,
  //     //   isActive: true,
  //     //   street: 'Viazov',
  //     //   stateProvinceId: 3,
  //     //   countryId: 2,
  //     // });
  //     // let result = await fineractService.createActiveClient('Dmitriy', 'Lvov', 4);
  //
  //   } catch (error) {
  //     console.log('Err: ', error);
  //   }
  //
  // });

});
