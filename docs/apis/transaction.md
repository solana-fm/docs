---
title: Transaction
---

### Elements of Transaction
* **block**: `<String>` The number that uniquely identifies a block.
* **transactionHash**: `<String>` The hash that uniquely identifies a transaction.
* **fee**: `<Int>` The transaction fee in Lamports.
* **status**: `<Enum>`
  - Null = 0,
  - Success = 1,
  - Failed = 2,
  - DataError = 3,
  - AccountInUse = 4,
  - AccountLoadedTwice = 5,
  - AccountNotFound = 6,
  - ProgramAccountNotFound = 7,
  - InsufficientFundsForFee = 8,
  - InvalidAccountForFee = 9,
  - AlreadyProcessed = 10,
  - BlockhashNotFound = 11,
  - InstructionError = 12,
  - CallChainTooDeep = 13,
  - MissingSignatureForFee = 14,
  - InvalidAccountIndex = 15,
  - SignatureFailure = 16,
  - InvalidProgramForExecution = 17,
  - SanitizeFailure = 18,
  - ClusterMaintenance = 19,
  - AccountBorrowOutstanding = 20,
* **timestamp**: `<Datetime>`

### Transaction GetAll

This query takes in the following parameters and returns all transactions in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/transactions?from= 2021-10-11T00:00:00Z&to= 2021-10-12T00:00:00Z
```
#### Sample returned results
```
[
    {
        "hash": "2igUamhXjm5RS1WgPEhubZvr4BreVnELvXgD26uaN7iSRhZvgUyhcStN8jAhsvpzs2FQALLkfr49fvHzMp4MkJcS",
        "block": 100988161,
        "timestamp": "2021-10-12T00:00:00Z",
        "status": 12,
        "fee": 5000
    },
    {
        "hash": "35nr8H93E6LLG5mqc4rUkST13cpkSYKiUZQruYririoe5ykNauCKJnN3bKv3hZ5TmpWjckoh8faLZoXhT1XBsiEV",
        "block": 100988161,
        "timestamp": "2021-10-12T00:00:00Z",
        "status": 12,
        "fee": 5000
    },
    ...
]
```

### Transaction TransactionCountInTimeRange

This query takes in the following parameters and returns the number of transactions in the specified timeframe resolution.

#### ** Parameters ** :

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
https://api-alpha.solana.fm/api/v1/charts/transaction-count?from= 2021-11-11T00:00:00Z&to= 2021-11-12T00:00:00Z&resolution=2
```
#### Sample returned results
```
[
    {
        "time": "2021-11-11T00:00:00Z",
        "value": 9123571
    },
    {
        "time": "2021-11-11T01:00:00Z",
        "value": 8610663
    },
    {
        "time": "2021-11-11T02:00:00Z",
        "value": 9479248
    },
    ...
]
```

### Transaction GetByTransaction

This query takes in the following parameters and returns the specific transaction in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/transactions/hash/2o6XZngqgf7sqdPqxvMFmSDGK6v62FFNyS2E5btRXiSAbfxJjf5RHh6jGbUuDaAdDZiK1Bu2KJ9WdGFcgSBtkKt8?from= 2021-10-11T00:00:00Z&to= 2021-10-12T00:00:00Z
```
#### Sample returned results
```
{
    "hash": "2o6XZngqgf7sqdPqxvMFmSDGK6v62FFNyS2E5btRXiSAbfxJjf5RHh6jGbUuDaAdDZiK1Bu2KJ9WdGFcgSBtkKt8",
    "block": 100811563,
    "timestamp": "2021-10-11T00:04:47Z",
    "status": 1,
    "fee": 0
}
```

### Transaction GetByStatus

This query takes in the following parameters and returns all transactions of a specified status in the specified time range.
:::note specify status enum in the following format /transaction-status/{status}

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/transactions/transaction-status/1?from= 2021-10-11T00:00:00Z&to= 2021-10-12T00:00:00Z
```
#### Sample returned results
```
[
    {
        "hash": "KfC93YDEzANtRTno9X4weqAFaKFzXF8kAcx9BCm5vN1X4QhABjiaaYARZ7QBhEQ3dBTAiDPsJVuDv8SVP8szRD9",
        "block": 100810991,
        "timestamp": "2021-10-11T00:00:00Z",
        "status": 1,
        "fee": 0
    },
    {
        "hash": "soAfMsQGhzERMTonq5y34ixc1FWy9gGbp7rEePpLHQnCdv3TLZXziv2LKcSBgbCzcENnMJoTbfazrRjDzneDTNH",
        "block": 100810991,
        "timestamp": "2021-10-11T00:00:00Z",
        "status": 1,
        "fee": 0
    },
    ...
]
```

### Transaction GetByBlockNumber

This query takes in the following parameters and returns all transactions of a specified block in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/transactions/block/100811563?from= 2021-10-11T00:00:00Z&to= 2021-10-12T00:00:00Z
```
#### Sample returned results
```
[
    {
        "hash": "5FDCJ5R8UoHWGE6wJuRyW83rbT723jZybkxf1JJVzpXGGqmVGryYhTxEsiPzH1Vhugu7oAzi6Fh6N5V9uT31163S",
        "block": 100811563,
        "timestamp": "2021-10-11T00:04:47Z",
        "status": 1,
        "fee": 0
    },
    {
        "hash": "Cr9gxdq7pJxGfYFt6Co5mLRoKeNq7YNtGR31ZggP98rTdYCKQSnmGGXcj5jNR46K3FVXVv2qMSeKT2JyzfL1XRs",
        "block": 100811563,
        "timestamp": "2021-10-11T00:04:47Z",
        "status": 1,
        "fee": 0
    },
    ...
]
```

### Transaction TotalFeesInTimeRange

This query takes in the following parameters and returns sum of fees in the specified time range.

#### ** Parameters ** :

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
https://api-alpha.solana.fm/api/v1/charts/transaction-fees?from=2021-11-01&to=2021-11-02&resolution=2
```
#### Sample returned results
```
[
    {
        "time": "2021-11-01T00:00:00Z",
        "value": 46.9179344177246
    },
    {
        "time": "2021-11-01T01:00:00Z",
        "value": 46.3386993408203
    },
    {
        "time": "2021-11-01T02:00:00Z",
        "value": 47.5075492858887
    },
    ...
]
```

### Transaction SuccessfulTransactionsInTimeRange

This query takes in the following parameters and returns all successful transactions in the specified time range.

#### ** Parameters ** :

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
https://api-alpha.solana.fm/api/v1/charts/successful-transactions?from=2021-11-01&to=2021-11-02&resolution=2
```
#### Sample returned results
```
[
    {
        "time": "2021-11-01T00:00:00Z",
        "value": 7807773
    },
    {
        "time": "2021-11-01T01:00:00Z",
        "value": 7756142
    },
    {
        "time": "2021-11-01T02:00:00Z",
        "value": 7895033
    },
    ...
]
```

### Transaction FailedTransactionsInTimeRange

This query takes in the following parameters and returns number of failed transactions in the specified time range.

#### ** Parameters ** :

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
https://api-alpha.solana.fm/api/v1/charts/failed-transactions?from=2021-11-01&to=2021-11-02&resolution=2
```
#### Sample returned results
```
[
    {
        "time": "2021-11-01T00:00:00Z",
        "value": 1500857
    },
    {
        "time": "2021-11-01T01:00:00Z",
        "value": 1447119
    },
    {
        "time": "2021-11-01T02:00:00Z",
        "value": 1540865
    },
    ...
]
```

