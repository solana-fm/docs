---
title: Block Reward
---
Stakers in Solana are rewarded for helping to validate the ledger. These rewards can come in a few forms, from validating transactions, validating rent payments, inflation and voting on a block.

For more information: https://docs.solana.com/cluster/stake-delegation-and-rewards

### BlockRewards TotalValidatorRewardsInTimeRange

This query takes in the following parameters and returns the total amount of validator rewards in the specified timeframe resolution.

#### ** Parameters ** :

- **resolution**: `<enum>`
  - One Second = 0
  - One Minute = 1
  - One Hour = 2
  - One Day = 3
  - One Week = 4
  - One Month = 5
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/charts/validator-reward?from=2021-11-01&to=2021-11-02&resolution=2
```
#### Sample returned results
```
[
    {
        "time": "2021-11-01T00:00:00Z",
        "value": 23.4589672088623
    },
    {
        "time": "2021-11-01T01:00:00Z",
        "value": 23.1693496704102
    },
    {
        "time": "2021-11-01T02:00:00Z",
        "value": 23.7537746429443
    },
    {
        "time": "2021-11-01T03:00:00Z",
        "value": 23.1286144256592
    },
    ...
]
```

### BlockRewards TotalRewardsByType

This query takes in the following parameters and returns the total amount of a specified reward type in the specified timeframe resolution.

#### ** Parameters ** :

- **Reward Type**: `<enum>`
  - Fee = 0
    - rewards from validating a transaction
  - Rent = 1
    - rewards from validating a rent payment
  - Staking = 2
    - rewards from inflation
  - Voting = 3
    - rewards from voting a block
- **Resolution**: `<enum>`
  - One Second = 0
  - One Minute = 1
  - One Hour = 2
  - One Day = 3
  - One Week = 4
  - One Month = 5
- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- paging: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/charts/reward-type/1?from=2021-11-01&to=2021-11-02&resolution=2
```
#### Sample returned results
```
[
    {
        "time": "2021-11-01T00:00:00Z",
        "value": 23.4589672088623
    },
    {
        "time": "2021-11-01T01:00:00Z",
        "value": 23.1693496704102
    },
    {
        "time": "2021-11-01T02:00:00Z",
        "value": 23.7537746429443
    },
    {
        "time": "2021-11-01T03:00:00Z",
        "value": 23.1286144256592
    },
    ...
]
```


