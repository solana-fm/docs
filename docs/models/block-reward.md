---
title: Block Reward
---

For more information: https://docs.solana.com/cluster/stake-delegation-and-rewards

### Elements of Block Reward

* account: `<String>` Account Hash
* hash: `<String>` Block Hash
* rewardType: `<String>`
* isConfirmed: `<Boolean>` If the block reward is confirmed
* amount: `<Float>` Amount of the block reward (in Lamports)
* postBalance: `<Float>` Post Balance of an account after block reward
* timeStamp: `<DateTime>`
* accountInstructions: `[Object]` Account Instructions Object where the account Hashes matches the accountInstructions

### blockRewards

Returns blockRewards

#### ** Parameters ** :

- from: `<DateTime>` (Required)
- to: `<DateTime>` (Required)
- paging:
  - page: `<int>`
  - limit: `<int>`

#### Example:

```
query{
	solana{
   blockRewards{
    hash
    isConfirmed
    amount
  	}
	}
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "blockRewards": [
        {
          "hash": "1356MayXhLkr6Htt35bqtDxhGQZDRwoLkoHksXtzQ8qR",
          "isConfirmed": true,
          "amount": 3727500
        },
        {
          "hash": "2bCg1JrL7697EG7mjZVR5q78H4VAadbKj1aDoRDqF4eT",
          "isConfirmed": true,
          "amount": 11
        },
        {
          "hash": "2bCg1JrL7697EG7mjZVR5q78H4VAadbKj1aDoRDqF4eT",
          "isConfirmed": true,
          "amount": -11700
        }
```

### blockRewardByPk

Returns specific instance of a Block Reward

#### ** Parameters ** :

- account: `<String>` (required)
- hash: `<String>` (required)
- rewardType: `<Enum>` (required)

#### Example:

```
query{
	solana{
   blockRewardByPk(account: "54fB9K9FV7Q5ptZuPr17Dob6SYdHJyLXnxVomoPnm16w",
          hash: "2bCg1JrL7697EG7mjZVR5q78H4VAadbKj1aDoRDqF4eT",
          rewardType: "RENT"){
    	amount
      postBalance

  	}
	}
}

```

#### Result:

```
{
  "data": {
    "solana": {
      "blockRewardByPk": {
        "amount": -11700,
        "postBalance": 5500
      }
    }
  }
}
```

### totalValidatorReward

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`

#### Example:

```
  query{
    solana{
totalValidatorReward(date: {from:"2021-08-11T03:40:04Z",to:"2021-08-11T06:00:04Z"})
  }
  }

```

#### Result:

```
{
  "data": {
    "solana": {
      "totalValidatorReward": 97939815
    }
  }
}
```

### totalValidatorRewardInTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging: (Optional)
  - page: `<int>` Start of Page
  - limit: `<int>`

#### Example:

```
query {
  solana {
     totalValidatorRewardInTimeRange(time: { from: "2021-08-11T00:00:00Z", to: "2021-08-11T04:00:00Z", resolution: ONE_MIN }) {
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
      "totalValidatorRewardInTimeRange": [
        {
          "time": "2021-08-11T03:54:00.000Z",
          "value": 97939815
        }
      ]
    }
  }
}
```

### totalRewardsByTypeInTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- rewardType: `<Enum>` (required)
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)
- paging: (Optional)
  - page: `<int>` Start of Page
  - limit: `<int>`

#### Example:

```
query {
  solana {
     totalValidatorRewardInTimeRange(rewardType: "RENT", time: { from: "2021-08-11T00:00:00Z", to: "2021-08-11T04:00:00Z", resolution: ONE_MIN }) {
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
      "totalValidatorRewardInTimeRange": [
        {
          "time": "2021-08-11T03:54:00.000Z",
          "value": 97939815
        }
      ]
    }
  }
}
```
