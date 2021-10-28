---
id: getting-started
title: Getting Started
---

## Objectives
- [Creation of API key](#creating-an-api-key)
- [Connect from your application](#connect-from-your-application)
  - [Python](#python-example)
  - [NodeJS](#nodejs-example)


## Introduction
Once you have [signed up to SolanaFM](https://solana.fm), you can proceed to create an [API key](https://solana.fm/ApiManagement) to build applications on top of the data we are providing and do additional on-the-fly computation for your analytical or visualisation needs.

## Creating an API key {#creating-an-api-key}
Head over to [API Management](https://solana.fm/ApiManagement) page, and generate a new API key for your project.

![SolanaFM API Management](/img/getting-started-tutorial/api-management-page.png)

Proceed, by providing a name for your API key so that you can easily identify generated keys in the future to revoke them.

Note that the generate API key will only be shown __once__ for security purposes, if you lose your key, you will have to revoke and recreate a new API key.

## Connect from your application {#connect-from-your-application}
So long as you have access to any HTTP client libraries, you're able to connect to SolanaFM and retrieve data for your internal analysis.

### Example usage with Python {#python-example}
Replace `<your_api_key_here>` with the API key you generated in the previous step.

```python
import requests
import json

url = "https://api.solana.fm"

payload="{\"query\":\"query {\\n  solana {\\n    blocksCreatedByTimeRange(time: { from: \\\"2021-10-28T00:00:00Z\\\", to: \\\"2021-10-28T04:00:00Z\\\", resolution: ONE_MIN }) {\\n      time\\n      value\\n    }\\n  }\\n}\",\"variables\":{}}"
headers = {
  'apikey': '<your_api_key_here>',
  'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

### Example usage with NodeJS {#nodejs-example}
Replace `<your_api_key_here>` with the API key you generated in the previous step.

```javascript
var axios = require('axios');
var data = JSON.stringify({
  query: `query {
  solana {
    blocksCreatedByTimeRange(time: { from: "2021-10-28T00:00:00Z", to: "2021-10-28T04:00:00Z", resolution: ONE_MIN }) {
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
