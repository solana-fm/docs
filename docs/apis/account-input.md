---
title: Account Input
---
Account inputs are records of transactions. It stores an account's balance pre-transaction and post-transaction state, and indicates the balance in question with `tokenId`. If `tokenId` is empty, lamports are being transacted.

For more Information on Accounts in Solana: https://docs.solana.com/developing/programming-model/accounts

### Elements of Account Input

* **transactionHash**: `<String>` The hash that uniquely identifies a transaction.
* **account**: `<String>` The hash that uniquely identifies an account.
* **tokenId**: `<String>` The hash that uniquely identifies a Token.
  - lamports is used as an input parameter to represent an empty tokenId. (see sample query below)
* **preBalance**: `<Float>` The balance of an account before a transaction in Lamports.
* **postBalance**: `<Float>` The balance of an account after a transaction in Lamports.

### AccountInput GetAll

Takes in the following parameters and returns all the accounts inputs within the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/account-inputs?limit=100&page=1&from=2022-01-01T00:00:00Z&to=2022-01-01T23:59:59Z
```

#### Sample returned results
```
[
    {
        "transactionHash": "3bTnvbciSxoL4V7bvxn8iSNkYAR54Q1Ud9khJuJSoSnjcB1NCBni4Dgsk23TxjPUsvkGX9QFZ6hHGZxeTa26Hioc",
        "account": "GfZybqTfVXiiF7yjwnqfwWKm2iwP96sSbHsGdSpwGucH",
        "tokenId": "",
        "preBalance": 216858640,
        "postBalance": 216858640,
        "timestamp": "2022-01-01T23:59:59Z"
    },
    {
        "transactionHash": "5cMZP6cDfv7KWLdRfqJ2P8CqxM7FbQDVB8H5zKMB6q3XmfB79kL4hgGwR9aDgTR3B9RqUAF9KfHfqhTRiyf33aMt",
        "account": "CroZVDJM6dBS6DtR8wkaxBfxvc3gaWissAMqMnA4N1wm",
        "tokenId": "",
        "preBalance": 49996084,
        "postBalance": 49996084,
        "timestamp": "2022-01-01T23:59:59Z"
    },
    ...
]
```
### AccountInput GetByAccount:

Takes in the following parameters and returns all the specified account inputs within the specified time range.

- **account**: `<String>` The hash that uniquely identifies an account
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/account-inputs/CroZVDJM6dBS6DtR8wkaxBfxvc3gaWissAMqMnA4N1wm?from=2021-12-31T00:00:00Z&to=2021-12-31T23:59:59Z
```

#### Sample returned results
```
[
    {
        "transactionHash": "3AnuGVKenp8VMHeXzsh5nbWqKE969b74J9FTxjfnG5pa1YDha1ZiiTnTAj6uZjtesnrRMJv1VdJEpVm5nwEk6nPU",
        "account": "CroZVDJM6dBS6DtR8wkaxBfxvc3gaWissAMqMnA4N1wm",
        "tokenId": "",
        "preBalance": 49996084,
        "postBalance": 49996084,
        "timestamp": "2021-12-31T01:04:54Z"
    },
    {
        "transactionHash": "2RPAUHxKJZQAmUxoxPTYdYPFsajKGdG2jncVEmCvQ4C22MzJLBfKD598xSFFzZCWd42rE2CVfCNdFCrjjfQ2fX51",
        "account": "CroZVDJM6dBS6DtR8wkaxBfxvc3gaWissAMqMnA4N1wm",
        "tokenId": "",
        "preBalance": 49996084,
        "postBalance": 49996084,
        "timestamp": "2021-12-31T01:21:08Z"
    },
    ...
]
```

### AccountInput GetByToken:

Takes in the following parameters and returns all the account inputs for a specific token within the specified time range.

- tokenId: `<String>` The Hash that uniquely identifies a Token
  - lamports is used as an input parameter to represent an empty tokenId
- from: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- to: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- paging: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/account-inputs/tokens/lamports
```

#### Sample returned results
```
[
    {
        "transactionHash": "24JdZtssvK1apSEBT3DxfRWxyzANeSqpVbg8vXeG9aENQyBFbNpU8UeRgjdp5ViBiKRMYyzdtFaGtnnsvzw5TD3T",
        "account": "9jQ16ZjBN1vmXn3dpRDc5eZkRPU1kUTp5MPnJuSFWb1U",
        "tokenId": "",
        "preBalance": 97497474797,
        "postBalance": 97497469797,
        "timestamp": "2022-02-19T22:07:16Z"
    },
    {
        "transactionHash": "24JdZtssvK1apSEBT3DxfRWxyzANeSqpVbg8vXeG9aENQyBFbNpU8UeRgjdp5ViBiKRMYyzdtFaGtnnsvzw5TD3T",
        "account": "HMArFr5hNKhVY7bPjYc6WJEbDmJHyUvgiJZgrceqHNAL",
        "tokenId": "",
        "preBalance": 51126996143,
        "postBalance": 51126996143,
        "timestamp": "2022-02-19T22:07:16Z"
    },
    ...
]
```
### AccountInput ActiveAccountsInTimeRange:

Takes in the following parameters and returns the account inputs for active accounts within the specified timeframe resolution.
Active accounts are accounts that have recent sending activities.

- **resolution**: `<enum>`
  - One Second = 0
  - One Minute = 1
  - One Hour = 2
  - One Day = 3
  - One Week = 4
  - One Month = 5
  - One Year = 6
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api.solana.fm/api/v1/account-inputs/history/active-accounts?from=2021-11-01&to=2021-11-02&resolution=2
```

#### Sample returned results
```
[
    {
        "transactionHash": "24JdZtssvK1apSEBT3DxfRWxyzANeSqpVbg8vXeG9aENQyBFbNpU8UeRgjdp5ViBiKRMYyzdtFaGtnnsvzw5TD3T",
        "account": "9jQ16ZjBN1vmXn3dpRDc5eZkRPU1kUTp5MPnJuSFWb1U",
        "tokenId": "",
        "preBalance": 97497474797,
        "postBalance": 97497469797,
        "timestamp": "2022-02-19T22:07:16Z"
    },
    {
        "transactionHash": "24JdZtssvK1apSEBT3DxfRWxyzANeSqpVbg8vXeG9aENQyBFbNpU8UeRgjdp5ViBiKRMYyzdtFaGtnnsvzw5TD3T",
        "account": "HMArFr5hNKhVY7bPjYc6WJEbDmJHyUvgiJZgrceqHNAL",
        "tokenId": "",
        "preBalance": 51126996143,
        "postBalance": 51126996143,
        "timestamp": "2022-02-19T22:07:16Z"
    },
    ...
]
```
