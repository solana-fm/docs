---
title: Native Stake
---
Native Stake refers to the native stake program in Solana. This program contains general functions related to staking within the entire blockchain. Here, most if not all of the instructions related to the staking mechanism of Solana will appear here.


### Elements of Native Stake
* **transactionHash**: `<String>` The hash that uniquely identifies a transaction.
* **amount**: `<String>` The amount of Solanas staked in Lamports.
* **program**: `<String>` The hash that uniquely identifies a program.
* **timestamp**: `<Datetime>`

### NativeStake Withdrawal

This query takes in the following parameters and returns the withdrawal transactions from a native stake in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/stake/withdrawals?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "3vRvzpcUL2gE7Uqzv3etzZNHG6pTTnxxffgkf3MoRaWR4cUcRKLoT75Pwz9QQ7jbGknzLrNLbk7M6y3iWH7UAv6W",
        "amount": 4000000000,
        "timestamp": "2021-10-16T12:14:57Z"
    },
    {
        "transactionHash": "RhXwDyPKKJK5MRA1u7hoV2TDacah4Lq3DYZpSetzH17U5eYTuEKT19FxLD8APiGcXnHjNx6t4wCtUwnafohGPZH",
        "amount": 131000000000,
        "timestamp": "2021-10-16T11:18:16Z"
    },
    {
        "transactionHash": "e5XyGzGqeo59WSi2akGLisZv7XT8tePj4xVbCtUmFZqGz19j3mqGudBSER3FfzgDcQtfo2oykkz1j9X16XVsraa",
        "amount": 200000000000,
        "timestamp": "2021-10-16T13:02:36Z"
    },
    ...
]
```

### NativeStake GetStakeSplit

This query takes in the following parameters and returns transactions involved in splitting a stake account.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/stake/splits?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "2Ds1TsyYXL3eAvBnWPQFxfXVMcvy1tV9qFpchSU1ynH7pZkNYCDHFKCxqLaxgsuMqx7TBpaNSATKaLwGE2YxhmJt",
        "account": "7je6PduMsgfBFkNZKcp5VMeS3GEcn3E91gqmh4RDYGeJ",
        "amount": -26000000,
        "timestamp": "2021-10-16T05:53:52Z"
    },
    {
        "transactionHash": "2Ds1TsyYXL3eAvBnWPQFxfXVMcvy1tV9qFpchSU1ynH7pZkNYCDHFKCxqLaxgsuMqx7TBpaNSATKaLwGE2YxhmJt",
        "account": "BS7k2oL8K3a6YQqkEY8wuKG1i5YCHZJAkgd6GQ3UDRoC",
        "amount": 26000000,
        "timestamp": "2021-10-16T05:53:52Z"
    },
    {
        "transactionHash": "2M66kMrb7G9HstK1mr7KwwRWFy6YAyui8KgExUBKcGF3JJZpgBxTPKqrfLR88wp8kF4QvgGG2wdBxLuH7GEntZ9A",
        "account": "9faUiY1QXpBMG8eMqzghFDJbeytC59HkGtdkWfooEGwF",
        "amount": -415062652474,
        "timestamp": "2021-10-16T07:00:16Z"
    },
    ...
]
```







