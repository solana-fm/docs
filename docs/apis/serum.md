---
title: Serum
---

### Elements of Serum
* **transactionHash**: `<String>` The hash that uniquely identifies a transaction.
* **market**: `<String>` The hash that uniquely identifies a market.
* **side**: `<enum>`
  - buy = 0
  - sell = 1
* **orderId**: `<Int>` The order number bound to the Serum order.
* **openOrderOwner**: `<String>` The account hash belonging to the owner of the order.
* **clientOrderID**: `<Int>` The account hash belonging to the client of the order. 0 value means the client has no id.
* **orderType**: `<Int>`
* **limit**: `<Int>` The size of the order limit.
* **limitPrice**: `<Int>` The order limit price.
* **maxQuantity**: `<Int>` The maximum quantity allowed for purchase.
* **payingAccount**: `<String>` The hash of the account that will pay for the order if it gets filled.
* **coinVault**: `<String>` Serum market's main currency vault.
* **pcVault**: `<String>` Serum market's counter currency vault.
* **msmrDiscountAccount**: `<String>` The account hash of a mega Serum that would give a user a fixed discount. This value can be null.
* **feeAuthority**: `<String>` The account hash of the account given authority to claim fees relating to the order.
* **feeReceivableAccount**: `<String>` The account hash of the account that wil receive the trading fees relating to the order.
* **authority**: `<String>` The account hash belonging to account that authorised the order.
* **requestQueueAccount**: `<String>` The account hash belonging to the specific serum market's request queue.
* **eventQueueAccount**: `<String>` The account hash belonging to the specific serum market's event queue.
* **bidsAccount**: `<String>` The account hash belonging to the Serum market account that stores all the bids relevant to this market.
* **asksAccount**: `<String>` The account hash belonging to the Serum market account that stores all the asks relevant to this market.
* **coinAccount**: `<String>` The account hash belonging to the account storing the main currency account used by the owner of the order.
* **coinMint**: `<String>` The account hash belonging to the account storing the main currency mint's information.
* **priceAccount**: `<String>` The account hash belonging to the owner's account, storing the counter currency used in the Serum order.
* **priceMint**: `<String>` The account hash belonging to the account storing the counter currency mint's information.
* **openOrderAuthority**: `<String>` The account hash belonging to the account with the authority to create the order.
* **pruneAuthority**: `<String>` The account hash belonging to the account with the authority to remove an order.
* **crankAuthority**: `<String>` The account hash belonging to the account with the authority to crank an order.
* **coinLotSize**: `<Int>` The lot size in the main currency's value.
* **priceCurrencyLotSize**: `<Int>` The lot size in the counter currency's value.
* **feeRateBps**: `<Int>` The fee rate of the order in basis points.
* **pcDustThreshold**: `<Int>` The counter currency's dust threshold. Dust refers to residual amounts of counter currencies that can be returned.
* **timestamp**: `<Datetime>`

### List all cancelled orders

This query takes in the following parameters and returns all Serum cancelled orders in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/serum/market/cancelled-orders?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "5ejH17N9S1aNSHbK5WnKhA4EQhKb1NMVMxTnvbRFySKuoavmdVb5ciydXRYBuWk2Xo9yhSuEvX8bQxhjeJZPnrEE",
        "market": "AtNnsY1AyRERWJ8xCskfz38YdvruWVJQUVXgScC1iPb",
        "side": null,
        "orderId": "17923039930552638758",
        "openOrderOwner": "3QzLWdzZpuYhqm55en9FpZC63zpsCGxGwL3PmmZPRZjc",
        "timestamp": "2021-10-16T14:02:34Z"
    },
    {
        "transactionHash": "Utn7q95fLQzGXWLiv1mSYs7xLfQm15xJPSpTzpdwAZEQHf5Mqzb5mvTyGdMbMvbtnwvMC6oSxFsYQBqvTvq5YDw",
        "market": "AtNnsY1AyRERWJ8xCskfz38YdvruWVJQUVXgScC1iPb",
        "side": null,
        "orderId": "14538001298780708296",
        "openOrderOwner": "3QzLWdzZpuYhqm55en9FpZC63zpsCGxGwL3PmmZPRZjc",
        "timestamp": "2021-10-16T14:02:34Z"
    },
    ...
]
```

### List all orders

This query takes in the following parameters and returns all Serum orders in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/serum/market/orders?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "5yfdgtpTaqG6iCMeDHjqAFxXeAnDDJYF24EG4z56cidJm3EQC7Je6tABFrMXgDuyq7YM72EER7hiVHm1ArbpnSGc",
        "clientOrderID": "0",
        "orderType": 1,
        "side": 1,
        "limit": -1,
        "limitPrice": 1,
        "maxQuantity": 13,
        "market": "AtNnsY1AyRERWJ8xCskfz38YdvruWVJQUVXgScC1iPb",
        "selfTradeBehaviour": 2,
        "payingAccount": "tDUUKiZZxBCqxggoKcaYkNXUSoNGa8dzo9fPDFynZBC",
        "coinVault": "GxPFMyeb7BUnu2mtGV2Zvorjwt8gxHqwL3r2kVDe6rZ8",
        "pcVault": "149gvUQZeip4u8bGra5yyN11btUDahDVHrixzknfKFrL",
        "msrmDiscountAccount": null,
        "timestamp": "2021-10-16T17:15:26Z"
    },
    {
        "transactionHash": "1LaocuMECSBAgTsVqcpWKvGdvBZdJAx3NPV1Q3GsUxeaHZrrcpG8utLJm6vzQYsV9g93TQRHmZnC1JTQtCAxMDs",
        "clientOrderID": "0",
        "orderType": 0,
        "side": 0,
        "limit": -1,
        "limitPrice": 7324,
        "maxQuantity": 96,
        "market": "AtNnsY1AyRERWJ8xCskfz38YdvruWVJQUVXgScC1iPb",
        "selfTradeBehaviour": 0,
        "payingAccount": "4gNeJniq6yqEygFmbAJa82TQjH1j3Fczm4bdeBHhwGJ1",
        "coinVault": "GxPFMyeb7BUnu2mtGV2Zvorjwt8gxHqwL3r2kVDe6rZ8",
        "pcVault": "149gvUQZeip4u8bGra5yyN11btUDahDVHrixzknfKFrL",
        "msrmDiscountAccount": "9R9R7jVhJ4TmzmCFzaAkH2jJULbwed2FQVQNL9d4brfT",
        "timestamp": "2021-10-16T18:04:28Z"
    },
    ...
]
```

### List all fee sweeps

This query takes in the following parameters and returns information of transactions involved in collecting Serum fees in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/serum/market/sweep-fees?from=2021-10-19T00:00:00Z&to=2021-10-19T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "jKGshLNfSfFdjCbJkrtNPP5ckByQE8QPGZpAPrkYKyF9nbTmrE9SmXeLy7Si9vZnJoNt4ZUPZ5JKdnNKoy2quau",
        "market": "F7SrwFTQ8uWBs9zhN9fctLKLJdEAz8fu7XmNyi9Sebht",
        "pcVault": "BHqWDxpG2RTVjf8VvwqJTmpGfXMyRzoqVrzzFoRZfYWd",
        "feeAuthority": "DeqYsmBd9BnrbgUwQjVH4sQWK71dEgE6eoZFw3Rp4ftE",
        "feeReceivableAccount": "12s7Ejm1TfZqcTozffvqEkYMCCvfht2E7ZbvyrUzuQ2U",
        "timestamp": "2021-10-19T02:55:59Z"
    },
    {
        "transactionHash": "4LFBunRQLNgF2f8Xi8vUyHp16Qr634iMYs3DpRgsmAgajhP2v49Fh9YQoYGj4LUua4BVKcEwMptybd7A3rt1YLLS",
        "market": "6etHwWWCSUqondCtD2pQtj4tnvggAJtJovu3w7YuZzob",
        "pcVault": "8sM8QsxUEeKPL7v9TJJki5fYdmVNzVe7JhmRgN99rM1v",
        "feeAuthority": "DeqYsmBd9BnrbgUwQjVH4sQWK71dEgE6eoZFw3Rp4ftE",
        "feeReceivableAccount": "12s7Ejm1TfZqcTozffvqEkYMCCvfht2E7ZbvyrUzuQ2U",
        "timestamp": "2021-10-19T02:56:07Z"
    },
    ...
]
```

### List all disabled markets

This query takes in the following parameters and returns the transactions involved in disabling a Serum market in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/serum/market/disabled-markets?from=2021-10-12T00:00:00Z&to=2021-10-12T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "4hUHsA2Eiis3z2szQUwPSdLHhFLfvpzsxX1LSKVaVc4iKYcTXdLDXmKxBCU3KeQrCxCWnYBKLcNxeHY6VSGpGaBx",
        "market": "3V2sfA9rCnBwjfqGca2UDxD4fVvPXW9GNAQCqAepKC9Q",
        "authority": "5ZVJgwWxMsqXxRMYHXqMwH2hd4myX5Ef4Au2iUsuNQ7V",
        "timestamp": "2021-10-12T08:08:11Z"
    },
    {
        "transactionHash": "T97LeTwGC3UbZn5EPkk9Juj1hHRpjEVWF7uvAyoCg5FyT5pHjJvRVGqWZRdXPDLxhcGH2GTaQoB6zbcWepjnDjL",
        "market": "3V2sfA9rCnBwjfqGca2UDxD4fVvPXW9GNAQCqAepKC9Q",
        "authority": "GcWEQ9K78FV7LEHteFVciYApERk5YvQuFDQPk1yYJVXi",
        "timestamp": "2021-10-12T06:37:03Z"
    }
]
```

### List all markets

This query takes in the following parameters and returns Serum markets in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/serum/markets?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "2TbWV3c1DDov8iVhKNEfuBM4zK4GqsXMHN4hBEG71SpLWBWStUNJHZMcr25U3YWgoDqdjNtKrvJemujYBthfVMMu",
        "market": "4PQmMrL1E7R2eg1P4djSEm6iu4yENjVE1TWb3tbZ5EBr",
        "requestQueueAccount": "58fWD2TqPsGWLaE7Ri2feb19JwG2Kn4Mzk5tHQAi1Kfq",
        "eventQueueAccount": "GH5E9s72VcAGGeGa7PyTeXPDDbph89NR2NnZLFJTFfXc",
        "bidsAccount": "3qXxLTEu8RPnAS5ncsp363GbJa7EBGD4UvjESqQVxaeJ",
        "asksAccount": "oRnN39F4PQcWJ4F91WESv7F9DdtNaaaRbsUCKLX7MLD",
        "coinAccount": "4XVXFB8E6vwZHgTGsgAAAWAH1BdD4WQ2KZfxME9Ygcoo",
        "coinMint": "zwqe1Nd4eiWyCcqdo4FgCq7LYZHdSeGKKudv6RwiAEn",
        "priceAccount": "EkNk5sCWboroqvwpViHMMJw6rEAauWnN1fjMBhAiX22C",
        "priceMint": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
        "openOrderAuthority": null,
        "pruneAuthority": null,
        "crankAuthority": null,
        "coinLotSize": 1000000000,
        "priceCurrencyLotSize": 10000,
        "feeRateBps": 0,
        "pcDustThreshold": 100,
        "timestamp": "2021-10-16T14:54:30Z"
    },
    ...
]
```

