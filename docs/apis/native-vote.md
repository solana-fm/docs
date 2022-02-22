---
title: Native Vote
---
Native vote refers to the program that denotes the governance and system of voting in the Solana.

### Elements of Native Vote
* **transactionHash**: `<Int>` The hash that uniquely identifies a transaction.
* **account**: `<Int>` The hash that uniquely identifies an account.
* **amount**: `<Int>` amount of voting power to be withdrawn in Lamports.
* **authority**: `<String>` The account hash with the authority to vote.
* **withdrawAuthority**: `<String>` The account hash with the authority to withdraw votes.
* **node**: `<String>` The hash that uniquely identifies the node/validator that is voted on.
* **authorisedWithdrawer**: `<String>` The hash of the account that is given authority to withdraw votes on behalf of the withdrawAuthority.
* **authorisedVoter**: `<String>` The account hash with the authority to vote.
* **commission**: `<Int>` The percentage of block rewards sent to the voter.
* **newIdentity**: `<String>` The account hash of a new identity of a vote account.
* **slots**: `List<Int>` The list of block numbers that the votes are valid for.
* **lastSlotSig**: `<String>` The hash belonging to the signature of the last slot.
* **lastSlotTimestamp**: `<String>`
* **timestamp**: `<Datetime>`

### List all withdrawals

This query takes in the following parameters and returns the accounts involved in withdrawing votes in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/vote/withdrawals?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "2W7YSXUzxfmc2jTVCNaATQAvuYAaEbMrLYqF71Zf6KgC7p3wtNVtfrJqXHsBcXGRttYCnVdXtunrWiZyEBGgQJdF",
        "account": "AFcbrdKxdr2kS5za9U2WhRGLmGSaxC3J9ZzekM8hnXXq",
        "amount": 8000000000,
        "recipient": "8CzsSMYcmtFmcGpYYv98kcoQQaWQLVtpQRUzEw6awPHU",
        "withdrawAuthority": "3YZ8F1KxC8ejQ8tvX11iwnV3JhUxXTurUBtbNp8HNhXA",
        "timestamp": "2021-10-16T11:17:27Z"
    },
    {
        "transactionHash": "4EJQ4qVGEqxW7KRj5oJfvhYYnzEBMSJRLHhqSM64KK9WVAvT5xqdbfx6iosXXHfKKyuDVNWSzDhMsDEnUNZws2zB",
        "account": "48oxpSHQkM4sdXUY9NQ8KnEtebzZbyk8uUT7JRdVQNuf",
        "amount": 10000000000,
        "recipient": "9gFxqsXbFyrKXUkqpAatonn47uYZ7sEZSnMxhzQoXrUJ",
        "withdrawAuthority": "48oxpSHQkM4sdXUY9NQ8KnEtebzZbyk8uUT7JRdVQNuf",
        "timestamp": "2021-10-16T11:22:54Z"
    },
    ...
]
```

### List all vote accounts

This query takes in the following parameters and returns the vote accounts in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/vote/accounts?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "4AE4hCoR24vFG58isA51z3Sg25zjyQ6gdzTL8TUR69uFTSUXcwfdn6ftccZkrDKahYMQntdgFPzpvsHYr6mwTNVL",
        "account": "F5Q9F429Ff7PMvVvSqmR57q5A921MMDBHzX7WuQVLHkw",
        "node": "4AB4JAWbsU7RZa6TiDJX1ZUnuYbmdfBgAeKj9a224LEc",
        "authorisedVoter": "4AB4JAWbsU7RZa6TiDJX1ZUnuYbmdfBgAeKj9a224LEc",
        "authorisedWithdrawer": "4AB4JAWbsU7RZa6TiDJX1ZUnuYbmdfBgAeKj9a224LEc",
        "commission": 10,
        "timestamp": "2021-10-16T09:59:23Z"
    },
    {
        "transactionHash": "jzdsHMdL3SbR4xpfx8xEHsg8A9Q4Hdf7M7XoZQbCiyJS1f5JKXioBKvwfSnRM4q7e1Pz2aStgcdt9gK2Q13Ptgp",
        "account": "denbgNhoGgvruFNaz1UiH1gc56RooG23TWr4gNSCmah",
        "node": "3cvnnvTAMqbsDMFfrfVnGhjpsZpY7XjZXegjAUm1otfm",
        "authorisedVoter": "3cvnnvTAMqbsDMFfrfVnGhjpsZpY7XjZXegjAUm1otfm",
        "authorisedWithdrawer": "3cvnnvTAMqbsDMFfrfVnGhjpsZpY7XjZXegjAUm1otfm",
        "commission": 100,
        "timestamp": "2021-10-16T20:50:38Z"
    }
]
```

### List all node commissions

This query takes in the following parameters and returns the node commissions in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/vote/update-commissions?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "2HrmiUbDgSFEhBVi82ihV58aw9vcDDVRJyAv7CvufUCyBfMZNHNaAiJMcLV1rfckSWFTDuvBuY9LpCPzhs1idnTe",
        "voteAccount": "6WL8sgtssHtvrV4enkyXge7w2u7P5NAGHHKRvtgd7cjJ",
        "withdrawAuthority": "ExiB9VG5ewKoxfCxQfjWggTsPAvbGVujDQCvKDKf3Qv2",
        "commission": 1,
        "timestamp": "2021-10-16T01:58:33Z"
    },
    {
        "transactionHash": "5xPmJjHWwXAR8XBVx1pzmUenwMvn6C8WVbxuwQzjx9NzZq14rTV4e8pJdzs1Wj4wjnvLJJwLpcqZCxF3afes6W9U",
        "voteAccount": "denbgNhoGgvruFNaz1UiH1gc56RooG23TWr4gNSCmah",
        "withdrawAuthority": "DELWNKWwis5z6k2SE3RTPqFmsFirmqCeGwtGKnhVQJgL",
        "commission": 10,
        "timestamp": "2021-10-16T21:37:35Z"
    }
]
```

### List all updated validator indentities

This query takes in the following parameters and returns the updated validator identities in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/vote/update-validator-identities?from=2021-11-21T00:00:00Z&to=2021-11-21T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "4mmtzaSUtQ21hwwV7Kyg9KFdDaqRnMShvPQUC7Fc4YCNoW5aFgwbRsnAhPd6rwoegB6JzS8K1yPW8aKur3JkfgnV",
        "account": "Bk9B3is7QheYhdHdgJ8XKFYp5mR4bZo8FTuLZKKWgd7c",
        "newIdentity": "Fcc4CnNytwNHUx4yshLCv5uwFaujvcGs6db3cZJvfBVw",
        "withdrawalAuthority": "6qkLvh1zCoBwmnp7aKeLoYqijo5VuooMoQWZwZwysVaP",
        "timestamp": "2021-11-21T01:59:42Z"
    },
    {
        "transactionHash": "3GJbRsBHY1Vofmai8Hh2ZWwofYNcehxrqK4NdBREgbHVqasbkYXjLZwrLXX2U5EkwfVPFoUwcMvAtjQHzGdhRvep",
        "account": "Bk9B3is7QheYhdHdgJ8XKFYp5mR4bZo8FTuLZKKWgd7c",
        "newIdentity": "FYezBwG3BDxYBq226pdfu1EcXDrZBiFRcwYTeV47djox",
        "withdrawalAuthority": "6qkLvh1zCoBwmnp7aKeLoYqijo5VuooMoQWZwZwysVaP",
        "timestamp": "2021-11-21T16:07:46Z"
    }
]
```

### List all votes

This query takes in the following parameters and returns the votes in the specified time range.

#### ** Parameters ** :

- **from**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **to**: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- **paging**: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>` Number of records shown per page

#### Sample query
```
https://api-alpha.solana.fm/api/v1/programs/vote/votes?from=2021-10-16T00:00:00Z&to=2021-10-16T23:59:59Z
```
#### Sample returned results
```
[
    {
        "transactionHash": "4QYGSmSoYbXwqDJ4Gqj6mxJAVKzn9rdPypj5sxcCqEy1g6U68oUfdZPidQYv5sEDJ93asaek7UJNyUXjKS6JmniK",
        "account": "3ywgnXHYqMZ9LAYjXxHPMxMHMQ1EDom4Pcm8whin5JPd",
        "authority": "JDScHrbfa4DEmqA4j5JTVc3wtwqXXeDCrjntRo2pWoLP",
        "slots": [
            101900333,
            101900334,
            101900335,
            101900336,
            101900337,
            101900338,
            101900339,
            101900340,
            101900341
        ],
        "lastSlotSig": "35cxZ1Db2zhHbhr1Yt79yDnk92eLpDuM8fmVFX4cmhJY",
        "lastSlotTimestamp": 1634426880,
        "timestamp": "2021-10-16T23:28:02Z"
    },
    {
        "transactionHash": "4rTQBTSBrpZh29JEJM52vrZdVGrnfvL93q7p96VzjGZQfmjtpVaTxhy1jZBDs4qH7vXjS8XeMrBDoAUxLPFnquoz",
        "account": "8Rs4wJJVFaRmARmwSvsVSAcSsUb9ZJD4USejuHm974hH",
        "authority": "ASryt5BzW7qsYW22xT6V5Bum49J2mEzucLc9bYoWFZMp",
        "slots": [
            101900340,
            101900341,
            101900342,
            101900343
        ],
        "lastSlotSig": "5DUU3MxfgwVYpG8PSkFT1M1z41iENGWePs1y1855rRTU",
        "lastSlotTimestamp": 1634426880,
        "timestamp": "2021-10-16T23:27:59Z"
    },
    ...
]
```


