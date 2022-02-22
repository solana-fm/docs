---
title: Account Input
---
Account inputs store an account's balance pre-transaction and post-transaction state, and indicates the balance in question with `tokenId`. If `tokenId` is empty, lamports is being transacted.

For more Information on Accounts in Solana: https://docs.solana.com/developing/programming-model/accounts

### Elements of Account Inputs

* transactionHash : `<String>` The hash of a specific transaction
* account: `<String>` The hash of a specific account
* tokenId: `<String>` The ID of a specific Token
* preBalance: `<Float>` The balance of an account before a transaction in Lamports
* postBalance: `<Float>` The balance of an account after a transaction in Lamports
* timeStamp: `<Float>` Time of creation in epochs
* transactions: `<Object>` The transactions that matches the returned account Hashes

### accountInputs

Returns account Inputs.

#### ** Parameters ** :

- from: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- to: `<DateTime>` in the format of YYYY-MM-DDTHH:MM:SSZ
- paging: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>`

#### Example:

```
query {
  solana {
    accountInputs(date: {from:"2021-01-09T05:30:00Z", to: "2021-10-10T05:30:00Z"} ){
      account
      transactionHash
    }
  }
}

```

#### Result:

```
{
  "data": {
    "solana": {
      "accountInputs": [
        {
          "account": "2Gx3UfV831BAh8uQv1FKSPKS9yajfeeD8GJ4ZNb2o2YP",
          "transactionHash": "56LkkCQL61Fpb96eTCZvSzfnUtgqanCX9ZN1QMmS4xbWg42d2fUxD7Ma5xwvSUCm82FiCJWN4jLM6jsxZmujbJn3"
        },
        {
          "account": "2MWuFpzA6bWc2Vw86shAq6oXZ3ShrVvKCg78jQCpu3Hw",
          "transactionHash": "2qCU22mz6Jj34bEpiuRigdLw53AD7J6JYEbejQo5ezDcTdqwbXdhLYHQAWU5wgSMZCPTe1e1eKiAra41oprjjNea"
        }...
```

### accountInputByPk

Returns an account Input via Primary Key

#### ** Parameters ** :

- transactionHash: `<String>` (Required)
- accountHash: `<String>` (Required)
- tokenId: `<String>` (Required)

#### Example:

```
query{
  solana {
    accountInputByPk(
      txHash: "5oYvae3qgPYa9BBuhb5g8yD62SuJu2xKqMzubNpLgP68ix7pEvbCkNBSBE5Kv961Csd8x8A2ZSpE1E8v6me7UFSt",
      accountHash: "2r8afzPadGoEJ8eqT71BGzN6ENJdeiwAGEcvu964yEQR",
      tokenId: "",
      date: {from:"2021-11-20T10:00:00Z", to: "2021-11-20T14:00:00Z"}
    ) {
      transactionHash
      account
      timestamp
    }
  }
}


```

#### Result:

```

  "data": {
    "solana": {
      "accountInputs": [
        {
          "account": "2Gx3UfV831BAh8uQv1FKSPKS9yajfeeD8GJ4ZNb2o2YP",
          "transactionHash": "56LkkCQL61Fpb96eTCZvSzfnUtgqanCX9ZN1QMmS4xbWg42d2fUxD7Ma5xwvSUCm82FiCJWN4jLM6jsxZmujbJn3"
          "timestamp": "2021-11-20T10:00:00Z"
        }
    }
  }
```

### accountSolBalance

Returns balances of accounts greater than the balance input

#### ** Parameters ** :

- balance `<Float>`(Required)
- paging: (Optional) `<int>`
  - page: `<int>` Start of Page
  - limit: `<int>`


#### Example:

```
query {
  solana {
    accountBalance(balance:100000) {
      account
      balance
      timestamp
    }
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "accountBalance": [
        {
          "account": "EGwohnADja2jGMoEtcntFb5bte5B7gZGCJgNX5q9nmM3",
          "balance": 2039280,
          "timestamp": "2021-08-17T05:27:33.000Z"
        },
        {
          "account": "5dufuPDMAyFoAiH6jDgYkvW6C9JDoTkRnkwMEX7JS8je",
          "balance": 1503360,
          "timestamp": "2021-08-17T05:27:33.000Z"
        },
        {
          "account": "5XhGZpENXAuHC8chWuXz7nvEMFyGNDHSw5bMJHsR9z8j",
          "balance": 2039280,
          "timestamp": "2021-08-17T05:27:33.000Z"
        } ...
```


### accountsWithHigestBalances
- paging: (Optional)
  - page: `<int>` Start of Page
  - limit: `<int>`


#### Example:

```
query {
  solana {
    accountsWithHighestBalances {
      account
      balance
    }
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "accountsWithHighestBalances": [
        {
          "account": "2ojv9BAiHUrvsm9gxDe7fJSzbNZSJcxZvf8dqmWGHG8S",
          "balance": 1740799932935461
        },
        {
          "account": "6ZRCB7AAqGre6c72PRz3MHLC73VMYvJ8bi9KHf1HFpNk",
          "balance": 1631898309447264
        },
        {
          "account": "FxteHmLwG9nk1eL4pjNve3Eub2goGkkz6g6TbvdmW46a",
          "balance": 1558982179345158
        }
```

### accountsActiveByTokenId

#### ** Parameters ** :
- tokenId: `<String>` (Required)
- from: `<DateTime>` (Required)
- to: `<DateTime>` (Required)
- paging: (Optional)
  - page: `<int>` Start of Page
  - limit: `<int>`


#### Example:

```
query{
  solana {
    accountsActiveByTokenId(
      tokenHash: "",
      time: {from:"2021-11-20T10:00:00Z", to: "2021-11-20T14:00:00Z", resolution: ONE_HOUR}
    ) {
     time
      value
    }
  }
}

```

#### Result:

```
{
  "data": {
    "solana": {
      "accountsActiveByTokenId": [
        {
          "time": "2021-11-20T14:00:00.000Z",
          "value": 2243
        },
        {
          "time": "2021-11-20T13:00:00.000Z",
          "value": 133399
        },
        {
          "time": "2021-11-20T12:00:00.000Z",
          "value": 123638
        },
        {
          "time": "2021-11-20T11:00:00.000Z",
          "value": 106969
        },
        {
          "time": "2021-11-20T10:00:00.000Z",
          "value": 107569
        }
      ]
    }
  }
}
```

