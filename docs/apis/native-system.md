---
title: Native System
---

### Elements of Native Stake
* **transactionHash**: `<String>` The hash that uniquely identifies a transaction.
* **amount**: `<String>` Amount of Solana in Lamports.
* **source**: `<String>` The account hash of the sender.
* **destination**: `<String>` The account hash of the receiver.
* **owner**: `<String>` Refers to the owner of the sending account.
* **program**: `<String>` The hash that uniquely identifies a program
* **nonceAuthority**: `<String>` Authority over a nonce account can optionally be assigned to another account. In doing so the new authority inherits full control over the nonce account from the previous authority, including the account creator.
* **nonceAccount**: `<String>` A temporary account that can be assigned to have control over another account.
* **timestamp**: `<Datetime>`

### NativeSystem GetAccountTransfers

This query takes in the following parameters and returns transactions involved in sending Lamports to stake accounts.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/system/transfers?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "3K6pDo1HzrVXQWLAQyj3pdcMkfhN2Wx5UYdz1t5udhj2cDdkJSq1YxAsUReoBNAFjyASDyJJ9bhdQ7AZuzuSu1xg",
        "source": "noM2QnsrffhdeL9agAtSPZ8Mmk33pcUgWgvtrG6YPsu",
        "destination": "3S9dArbMSTbEUPWxqNZfKoyHncMGK3o6vbTqhKjgo7Ty",
        "amount": 2039280,
        "timestamp": "2021-10-16T07:00:56Z"
    },
    {
        "transactionHash": "5isS1Ae9jRG4DA8rjb6mqF1DRhfHuaXD5G2vs8Jb1P4ocBvySyvJAkEuyds1gVKd3YNehm8q89HSaKKGWxWmJKfU",
        "source": "7uQiZwmRnTm4qf5CjPupBVwQgvVsxqizfhC5apLn4L7u",
        "destination": "J5tYtKhAz169uzdgJc3CugmjNwPt6sfY3qgtpYC4pEiL",
        "amount": 544292,
        "timestamp": "2021-10-16T07:00:56Z"
    },
    ...
]
```

### NativeSystem GetAccountCreations

This query takes in the following parameters and returns all stake accounts created in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/system/account-creations?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "2iHMdc5BqXwaT7Xtzdn2Um6hSYpbRZywzfsYybCbRouamSEurRF73DiQ84nNapuPx7WUpLyUwAjzp7yNtHs66a7q",
        "address": "YqBe7sYp6FtoHbYaY2V5gQpCTPc1wRjYejjM29vqVci",
        "lamports": 33018240,
        "owner": "JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU",
        "timestamp": "2021-10-16T00:39:33Z"
    },
    {
        "transactionHash": "3eoctQ6gg3ma85YH96kHQ6SjxXbXzgqb6jDGwDFpvdt3DpoZ7yR42WCc1746nYcUwYnVn2jaJHLqJE8qj5NredcK",
        "address": "6pvAE59bxbbRFd3yDcpMEqdwgkVbh4Qca8pRPzzdVP5i",
        "lamports": 33018240,
        "owner": "JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU",
        "timestamp": "2021-10-16T00:04:22Z"
    },
    ...
]
```

### NativeSystem GetAccountAssignments

This query takes in the following parameters and returns the transactions involved in the assignment of an account to a program.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/system/assignments?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "5mxHcrNDD6fBudBK9BvuJuynigMF2du5HmWWEzFB7JNTQ2Z43YqnQg5XZDh7UYic4xFR1dq5nSRyX2DKgVKJB3nk",
        "account": "5PrAzE24EKSed5Ds8zn7C5epFmafd5QSmNH2Fu7BeHXA",
        "program": "LUNAZQmNvQYHycB9m3kE95afQQyf4LZw1pfXKvZaZar",
        "timestamp": "2021-10-16T23:56:14Z"
    },
    {
        "transactionHash": "AvT75yCqX2xr1nGTcA4kJHLhSocYNhn21Ed9KmoVPQKJWpMewkAaVA7mo8GyKH4P4JK3d5hgQEZCUwxG6gqCJSh",
        "account": "E6N9mGCegdiEZ1yQDw4ouJPGBZ4rQjiYjUcANpm1e5xj",
        "program": "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        "timestamp": "2021-10-16T23:40:48Z"
    },
    ...
]
```

### NativeSystem GetNonceAdvancements

This query takes in the following parameters and returns all transactions involved in invoking nonce advancement instructions in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/system/advance-nonce-accounts?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "5PdExV215Cuj1MDn44vyJw6urB9vGWFwUmaEsQeddEfSb5dcs7j3D24eLygAYwsv5XGmkk44Yge4tsrkahb3BBPv",
        "nonceAccount": "HhYBuSgYr4G5FX2PvvLHTLi22CRigVSJZMfiQL8RKLd",
        "nonceAuthority": "38QU8LKVK1Ew5uzsqttamNTTFxvnfzgi2ACQvj3ekuom",
        "timestamp": "2021-10-16T09:06:00Z"
    },
    {
        "transactionHash": "3ForE5F9ivsnqn9beYASKfXH5zMtsqwzUoFW1qUtNCdhiCZ48HfaBK5mVdHaZ3Q5jhy2VUDRuvMDZVc7PsuvYTKk",
        "nonceAccount": "HhYBuSgYr4G5FX2PvvLHTLi22CRigVSJZMfiQL8RKLd",
        "nonceAuthority": "38QU8LKVK1Ew5uzsqttamNTTFxvnfzgi2ACQvj3ekuom",
        "timestamp": "2021-10-16T10:06:18Z"
    },
    ...
]
```
