For more information: https://docs.solana.com/cluster/stake-delegation-and-rewards

### Elements of Block Reward
* account: `<String>` Account Hash
* hash: `<String>` Block Hash
* blockRewardType: `<String>` 
* isConfirmed: `<Boolean>` If the block reward is confirmed
* amount: `<Float>` Amount of the block reward (in Lamports)
* postBalance: `<Float>` Post Balance of an account after block reward 

### blockRewards
Returns the first 25 Transactions 


#### ** Parameters ** : 

None

#### Example:
```
query{
	blockRewards{
    amount
  }
}
```

#### Result:
```

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
    blockRewardByPk(account:"",hash:"",blockRewardType:""){

    }
  }
}
```

#### Result:
```

```