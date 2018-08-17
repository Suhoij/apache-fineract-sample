## What is apache-fineract?

This module contains service to interact with [Apache Fineract](https://demo.openmf.org/api-docs/apiLive.htm#top) microfinance platform.
It simplifies the requests and expose convenient API methods to work with he Fineract REST API.                                                                                                              <br/> 

Current module covers next endpoints:

* Retrieve client by id
* Retrieve the list of clients
* Create new client

## Installation

The module is not in npm repository. So, please use next npm command to install it.
```
$ npm install https://github.com/ksondz/apache-fineract-api.git
```

## Usage

```js
import fineract from 'apache-fineract-sample';
const fineractService = fineract();

fineractService.getClient(1)
               .then(function(client) {
                  console.log(client);
               })
               .catch(function(error) {
                  console.log(error);
               });

```

## Running tests

```
$ npm test
```