---
title: Block
---
A block is a contiguous set of entries on the ledger covered by a vote.

For more Information on Blocks: https://docs.solana.com/proposals/block-confirmation

### Elements of Block
* **number**: `<Float>` The number that uniquely identifies a block.
* **hash**: `<String>` The hash that uniquely identifies a block.
* **fetchstatus**: `<Int>` refers to the status of the block.
  - Fetching = 0
  - Fetch Failed = 1
  - Fetched = 2
* **proposer**: `<String>` The hash of the Proposer of the block.
* **parent**: `<String>` The hash of the Parent of the block.
* **isSkipped**: `<Boolean>` A boolean value indicating whether a block is skipped.
* **epochId**: `<Float>` The epoch the block belongs to.
* **timestamp**: `<DateTime>`

### Block GetAll

This query takes in the following parameters and returns all the blocks in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/blocks?from=2022-01-01&to=2022-01-02
```
#### Sample returned results
```
[
    {
        "number": 114330506,
        "timestamp": "2022-01-01T16:00:00Z",
        "hash": "3XLQsnAh1oZ7CH1EBj4VMeFuAGTAs1GNnHz1auCxyAqG",
        "fetchStatus": 2,
        "proposer": "6kDyGMHbuWekkcquroYNp8VRL5pQiUzEJ11gJ75qJsRy",
        "parent": "7QRVqy8uDq7LwkFPK4SAuSciXZaH7jcpzrejwvG31t6z",
        "isSkipped": false,
        "epochId": 264
    },
    {
        "number": 114330504,
        "timestamp": "2022-01-01T15:59:59Z",
        "hash": "8XobGbXmzo9JAQ7oUbRTxEJDhydXxvPAkzZ6yFwcxu9f",
        "fetchStatus": 2,
        "proposer": "6kDyGMHbuWekkcquroYNp8VRL5pQiUzEJ11gJ75qJsRy",
        "parent": "12LY4KGeARkgwiUfyNV69pCc1Lg5oP1ZbUk7tyZUHcBe",
        "isSkipped": false,
        "epochId": 264
    },
    ...
]
```

### Block GetByEpoch

This query takes in the following parameters and returns all the blocks that belongs to the specified epoch in the specified time range.

#### ** Parameters ** :

- **epochId**: `<Float>` The epoch the block belongs to
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/epoch/250/blocks
```
#### Sample returned results
```
[
    {
        "number": 108431999,
        "timestamp": "2021-11-24T05:56:26Z",
        "hash": "H6nKq3DiG1NXs3GbdTMo7GBUDDpbPizhy9KrU8y3y2Gm",
        "fetchStatus": 2,
        "proposer": null,
        "parent": "7xHzWwoXX9wkMQXDwHrpXV64eawuaZJQ6N6CTFHRqkmM",
        "isSkipped": false,
        "epochId": 250
    },
    {
        "number": 108431998,
        "timestamp": "2021-11-24T05:56:26Z",
        "hash": "7xHzWwoXX9wkMQXDwHrpXV64eawuaZJQ6N6CTFHRqkmM",
        "fetchStatus": 2,
        "proposer": null,
        "parent": "HJ6ZnicycTQgkvspGmg5yu7XEvsGfGn5QCJvtXqyUo1h",
        "isSkipped": false,
        "epochId": 250
    },
    ...
]
```

### Block GetByBlockNumber

This query takes in the following parameters and returns the block corresponding to the specified block number in the specified time range.

#### ** Parameters ** :

- **number**: `<Float>` Unique Identifier of a Block
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/blocks/108431999
```
#### Sample returned results
```
{
    "number": 108431999,
    "timestamp": "2021-11-24T05:56:26Z",
    "hash": "H6nKq3DiG1NXs3GbdTMo7GBUDDpbPizhy9KrU8y3y2Gm",
    "fetchStatus": 2,
    "proposer": null,
    "parent": "7xHzWwoXX9wkMQXDwHrpXV64eawuaZJQ6N6CTFHRqkmM",
    "isSkipped": false,
    "epochId": 250
}
```

### Block BlocksCreatedInTimeRange

This query takes in the following parameters and returns the number of blocks created in the specified timeframe resolution.

#### ** Parameters ** :

- **resolution**: `<enum>`
  - One Second = 0
  - One Minute = 1
  - One Hour = 2
  - One Day = 3
  - One Week = 4
  - One Month = 5
- **number**: `<Float>` Unique Identifier of a Block
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/charts/blocks-created?from=2021-11-01&to=2021-11-05&resolution=2
```
#### Sample returned results
```
[
    {
        "time": "2021-11-04T00:00:00Z",
        "value": 6371
    },
    {
        "time": "2021-11-04T01:00:00Z",
        "value": 6568
    },
    {
        "time": "2021-11-04T02:00:00Z",
        "value": 6698
    },
    {
        "time": "2021-11-04T03:00:00Z",
        "value": 6692
    },
    ...
]
```

### Block UniqueValidatorsInTimeRange

This query takes in the following parameters and returns the number of unique validators in the specified timeframe resolution.

#### ** Parameters ** :

- **resolution**: `<enum>`
  - One Second = 0
  - One Minute = 1
  - One Hour = 2
  - One Day = 3
  - One Week = 4
  - One Month = 5
- **number**: `<Float>` Unique Identifier of a Block
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/charts/unique-validators?from=2021-12-01&to=2021-12-05&resolution=2
```
#### Sample returned results
```
[
    {
        "time": "2021-12-04T00:00:00Z",
        "value": 448
    },
    {
        "time": "2021-12-04T01:00:00Z",
        "value": 448
    },
    {
        "time": "2021-12-04T02:00:00Z",
        "value": 463
    },
    {
        "time": "2021-12-04T03:00:00Z",
        "value": 473
    },
    ...
]
```


