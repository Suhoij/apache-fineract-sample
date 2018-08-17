module.exports = (restRequest) => {

  return {

    /**
     * Retrieves client by clientId.
     *
     * @param {number} clientId
     * @returns {Promise} Client data as a json in case of success.
     * @throws Exception in case of error
     */
    getClient: clientId => new Promise((resolve, reject) => {
      restRequest.get(`/clients/${clientId}`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    }),

    /**
     * Retrieves the list of clients. By default it will return first 200 records.
     *
     * @param {Object} optionalParams
     * @param {number} optionalParams.offset
     * @param {number} optionalParams.limit
     * @param {string} optionalParams.orderBy
     * @param {string} optionalParams.sortBy
     * @param {number} optionalParams.officeId
     * @param {string} optionalParams.underHierarchy
     * @param {string} optionalParams.displayName
     * @param {string} optionalParams.firstName
     * @param {string} optionalParams.lastName
     * @param {number} optionalParams.externalId
     * @param {boolean} optionalParams.orphansOnly
     *
     * @returns {Promise} Client data as a json in case of success.
     * @throws Exception in case of error
     */
    getClientsList: (optionalParams = {}) => new Promise((resolve, reject) => {

      const requestConfig = {
        params: optionalParams,
      };

      restRequest.get('/clients', requestConfig)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response.data);
        });
    }),

    /**
     * Create inactive client in Fineract.
     *
     * @param {string} firstName
     * @param {string} lastName
     * @param {number} officeId
     * @param {Object} optionalFields
     * @param {number} optionalFields.externalId
     * @param {string} optionalFields.accountNo
     * @param {number} optionalFields.staffId
     * @param {string} optionalFields.mobileNo
     * @param {number} optionalFields.savingsProductId
     * @param {number} optionalFields.genderId
     * @param {number} optionalFields.clientTypeId
     * @param {number} optionalFields.clientClassificationId
     * @returns {Promise} In case of success method will return object with
     * newly created clientId and resourceId.
     * @throws Exception
     *
     */
    createInactiveClient: (firstName,
                           lastName,
                           officeId,
                           optionalParams = {}) => new Promise((resolve, reject) => {
      const requestData = Object.assign({
        firstname: firstName,
        lastname: lastName,
        active: false,
        officeId,
      }, optionalParams);

      restRequest.post('/clients', requestData)
        .then((response) => {
          resolve({
            clientId: response.data.clientId,
            resourceId: response.data.resourceId,
          });
        })
        .catch((error) => {
          reject(error.response.data);
        });
    }),


    /**
     * Create inactive client with address in Fineract.
     *
     * @param {string} firstName
     * @param {string} lastName
     * @param {number} officeId
     * @param {Object} addressFields
     * @param {number} addressFields.addressTypeId
     * @param {boolean} addressFields.isActive
     * @param {string} addressFields.street
     * @param {number} addressFields.stateProvinceId
     * @param {number} addressFields.countryId
     * @param {Object} optionalParams
     * @param {number} optionalParams.externalId
     * @param {string} optionalParams.accountNo
     * @param {number} optionalParams.staffId
     * @param {string} optionalParams.mobileNo
     * @param {number} optionalParams.savingsProductId
     * @param {number} optionalParams.genderId
     * @param {number} optionalParams.clientTypeId
     * @param {number} optionalParams.clientClassificationId
     * @returns {Promise} In case of success method will return object with newly created clientId
     * and resourceId.
     * @throws Exception
     *
     */
    createInactiveClientWithAddress: (firstName,
                                      lastName,
                                      officeId,
                                      addressFields,
                                      optionalParams = {}) => new Promise((resolve, reject) => {
      const requestData = Object.assign({
        firstname: firstName,
        lastname: lastName,
        active: false,
        officeId,
        address: [
          addressFields,
        ],
      }, optionalParams);

      const requestConfig = {
        params: {
          'enable-address': true,
        },
      };

      restRequest.post('/clients', requestData, requestConfig)
        .then((response) => {
          resolve({
            clientId: response.data.clientId,
            resourceId: response.data.resourceId,
          });
        })
        .catch((error) => {
          reject(error.response);
        });
    }),


    /**
     * Create active client in Fineract.
     *
     * @param {string} firstName
     * @param {string} lastName
     * @param {number} officeId
     * @param {Date} activationDate
     * @param {string} locale
     * @param {Object} optionalParams
     * @param {number} optionalParams.externalId
     * @param {string} optionalParams.accountNo
     * @param {number} optionalParams.staffId
     * @param {string} optionalParams.mobileNo
     * @param {number} optionalParams.savingsProductId
     * @param {number} optionalParams.genderId
     * @param {number} optionalParams.clientTypeId
     * @param {number} optionalParams.clientClassificationId
     * @returns {Promise} In case of success method will return object with newly created clientId and resourceId.
     * @throws Exception
     *
     */
    createActiveClient: (firstName,
                         lastName,
                         officeId,
                         activationDate = new Date().toISOString().slice(0, 10),
                         locale = 'en',
                         optionalParams = {}) => new Promise((resolve, reject) => {

      const requestData = Object.assign({
        firstname: firstName,
        lastname: lastName,
        active: true,
        locale,
        activationDate,
        dateFormat: 'yyyy-MM-dd',
        officeId,

      }, optionalParams);

      restRequest.post('/clients', requestData)
        .then((response) => {
          resolve({
            clientId: response.data.clientId,
            resourceId: response.data.resourceId,
          });
        })
        .catch((error) => {
          reject(error.response.data);
        });
    }),


    /**
     * Create active client in Fineract.
     *
     * @param {string} firstName
     * @param {string} lastName
     * @param {number} officeId
     * @param {Date} activationDate
     * @param {string} locale
     * @param {Object} optionalParams
     * @param {number} optionalParams.externalId
     * @param {string} optionalParams.accountNo
     * @param {number} optionalParams.staffId
     * @param {string} optionalParams.mobileNo
     * @param {number} optionalParams.savingsProductId
     * @param {number} optionalParams.genderId
     * @param {number} optionalParams.clientTypeId
     * @param {number} optionalParams.clientClassificationId
     * @returns {Promise} In case of success method will return object with newly created clientId and resourceId.
     * @throws Exception
     *
     */
    createActiveClientWithAddress: (firstName,
                                    lastName,
                                    officeId,
                                    activationDate = new Date().toISOString().slice(0, 10),
                                    locale = 'en',
                                    addressFields,
                                    optionalParams = {}) => new Promise((resolve, reject) => {

      const requestData = Object.assign({
        firstname: firstName,
        lastname: lastName,
        active: true,
        locale,
        activationDate,
        dateFormat: 'yyyy-MM-dd',
        officeId,
        address: [
          addressFields,
        ],
      }, optionalParams);

      const requestConfig = {
        params: {
          'enable-address': true,
        },
      };

      restRequest.post('/clients', requestData, requestConfig)
        .then((response) => {
          resolve({
            clientId: response.data.clientId,
            resourceId: response.data.resourceId,
          });
        })
        .catch((error) => {
          reject(error.response.data);
        });
    }),

  };
};
