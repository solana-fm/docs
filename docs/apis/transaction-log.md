---
title: Transaction Log
---

### Elements of Transaction Log
* **line**: `<String>` The line number of the transaction log.
* **transactionHash**: `<String>` The hash that uniquely identifies a transaction.
* **timestamp**: `<Datetime>`

### List all TransactionLogs

This query takes in the following parameters and returns all transaction logs in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/transaction-logs?from=2020-10-13T00:00:00Z&to=2020-10-14T00:00:00Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "32D2rhKbPP294XuSPP4JjvD1B5t2p2fP7VaidKUj9kA1ZidGMcvANQy4BNcXAynBfKngcAJpqNMPAqDmfb9Yesfd",
        "line": 1,
        "timestamp": "2020-10-14T00:00:00Z",
        "data": "\n@BPF program EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o success"
    },
    {
        "transactionHash": "3pxfYzeVKFCqY8uMkHuJ8WsXkXSsgGq9FcbWS7jausy4L2LhKEGCwhT5jtkZgibKCJV8jWCHbXyUgAox9wE1vEdk",
        "line": 0,
        "timestamp": "2020-10-14T00:00:00Z",
        "data": "\n=Call BPF program EUqojwWA2rd19FZrzeBncJsm38Jm1hEhE3zsmX3bRc2o"
    },
   ...
]
```

### Retrieve TransactionLog by a specific transaction

This query takes in the following parameters and returns all transaction logs of a specified transaction in the specified time range.

#### ** Parameters ** :

- **transactionHash**: `<String>` The hash that uniquely identifies a transaction
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/transaction-logs/51ujtzece923uP3dy9VreMnChEUw7jG26VUZEuq9o6qS8j5xt51ozhSDoH3QJ4UQGtFD2ha5LfjnAgyHmTWgVRhe?from=2020-10-13T00:00:00Z&to=2020-10-14T00:00:00Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "51ujtzece923uP3dy9VreMnChEUw7jG26VUZEuq9o6qS8j5xt51ozhSDoH3QJ4UQGtFD2ha5LfjnAgyHmTWgVRhe",
        "line": 24,
        "timestamp": "2020-10-13T04:35:47Z",
        "data": "\n?BPF program TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA success"
    },
    {
        "transactionHash": "51ujtzece923uP3dy9VreMnChEUw7jG26VUZEuq9o6qS8j5xt51ozhSDoH3QJ4UQGtFD2ha5LfjnAgyHmTWgVRhe",
        "line": 1,
        "timestamp": "2020-10-13T04:35:47Z",
        "data": "\n(Program log: checking account padding..."
    },
    ...
]
```
