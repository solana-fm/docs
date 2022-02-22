---
id: getting-started
title: Getting Started
---



## Objectives
- [Creation of API key](#creating-an-api-key)
- [Connect from your application via GraphQL](#connect-from-your-application-via-graphql)
  - [Python](#python-graphql-example)
  - [NodeJS](#nodejs-graphql-example)
- [Connect from your application via REST](#connect-from-your-application-via-rest)
  - [Python](#python-rest-example)
  - [NodeJS](#nodejs-rest-example)


## Setting Up
Once you have [signed up with SolanaFM](https://solana.fm), you can create an [API key](https://solana.fm/api-management) to build applications on top of SolanaFM and do additional on-the-fly computation for your analytical or visualisation needs.

## Creating an API key {#creating-an-api-key}
Head over to our [API Management](https://solana.fm/api-management) page, and generate a new API key for your project.

![SolanaFM API Management](/img/getting-started-tutorial/api-management-page.png)

Provide a name for your API key so that you can easily identify generated keys in the future to revoke them.

**Note:** The generated API key will only be shown __once__ for security purposes, if you lose your key, you will have to revoke and regenerate a new API key.

## Connect from your application via GraphQL {#connect-from-your-application-via-graphql}
As long as you have access to any HTTP client libraries, you're able to connect to SolanaFM and retrieve data.

### Example usage with Python {#python-graphql-example}
Replace `<your_api_key_here>` with the generated API key.
```python
import requests
import json

url = "https://api.solana.fm"

payload="{\"query\":\"query {\\n  solana {\\n    blocksCreatedInTimeRange(time: { from: \\\"2021-10-28T00:00:00Z\\\", to: \\\"2021-10-28T04:00:00Z\\\", resolution: ONE_MIN }) {\\n      time\\n      value\\n    }\\n  }\\n}\",\"variables\":{}}"
headers = {
  'apikey': '<your_api_key_here>',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

### Example usage with NodeJS {#nodejs-graphql-example}
Replace `<your_api_key_here>` with the generated API key.

```javascript
var axios = require('axios');
var data = JSON.stringify({
  query: `query {
  solana {
    blocksCreatedInTimeRange(time: { from: "2021-10-28T00:00:00Z", to: "2021-10-28T04:00:00Z", resolution: ONE_MIN }) {
      time
      value
    }
  }
}`,
  variables: {}
});

var config = {
  method: 'post',
  url: 'https://api.solana.fm',
  headers: {
    'apikey': '<your_api_key_here>',
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```

## Connect from your application via REST {#connect-from-your-application-via-rest}
### Example usage with Python {#python-rest-example}
Replace `<your_api_key_here>` with the generated API key.

```python
import requests

url = "https://api-alpha.solana.fm/api/v1/blocks?from=2022-01-01&to=2022-01-02"

payload={}
headers = {
  'apikey': '<your_api_key_here>'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)
```

### Example usage with NodeJS {#nodejs-rest-example}
Replace `<your_api_key_here>` with the generated API key.

```javascript
var axios = require('axios');

var config = {
  method: 'get',
  url: 'https://api-alpha.solana.fm/api/v1/blocks?from=2022-01-01&to=2022-01-02',
  headers: { 
    'apikey': '<your_api_key_here>'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});
```
