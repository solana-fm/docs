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

### blockRewards
Returns blockRewards


#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>`Start of Page 
- from: `<DateTime>` (Required)
- to: `<DateTime>` (Required)

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
* account: `<String>` (required) Account Hash
* hash: `<String>` (required) Block Hash
* blockRewardType: `<String>` (required)

#### Example:
```
query{
	solana{
   blockRewardByPk(account: "54fB9K9FV7Q5ptZuPr17Dob6SYdHJyLXnxVomoPnm16w",
          hash: "2bCg1JrL7697EG7mjZVR5q78H4VAadbKj1aDoRDqF4eT",
          blockRewardType: "RENT"){
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

- timeStamp `<DateTime>`

#### Example:

```
query {
  solana {
    totalValidatorReward(timeStamp: "2021-05-05")
  }
}
```

#### Result:

```
{
  "data": {
    "solana": {
      "totalValidatorReward": 10213094
    }
  }
}
```
### totalValidatorRewardInTimeRange

#### ** Parameters ** :

- from: `<DateTime>`
- to: `<DateTime>`
- resolution: ``
- resolution: `<Enum>` (required) (ONE_DAY,ONE_WEEK,ONE_MONTH)

### Example:

```
query {
  solana {
    totalValidatorRewardInTimeRange(ƒtime:{from:"2021-08-01T05:30:30Z",to:"2021-09-10T20:30:30Z",resolution:ONE_MIN}){
    timestamp
    value
    }
  }
}
```

### Result:

```
{
  "data": {
    "solana": {
      "totalValidatorRewardInTimeRange": []
    }
  }
}
```