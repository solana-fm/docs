---
title: Account
---

For more Information on Accounts: https://docs.solana.com/developing/programming-model/accounts



### Elements of Accounts
* hash : `<String>` The Hash of a specific account
* accountType: `<Enum>` The Type of the account
* balance: `<String>` The Balance of the account in lamports
* data: `<Float>` The Data the account contains
* owner: `<String>` The Owner of the account
* label: `<String>` The Label of the account 
* executable: `<Boolean>` If an account can execute a program
* upgrade Authority: `<String>` The ability to deploy a program
* rentEpoch: `<Float>` Epoch at which this account will next owe rent
* createdAt: `<Float>` Time (in epochs) it was created at  

### Accounts
Returns accounts

#### ** Parameters ** : 

None 

#### Example:
```
query{
  accounts{
    balance
    hash
    AccountType
    owner
    rentEpoch
    createdAt
    upgradeAuthority
    
  }
}
```


#### Result:
```
{
  "data": {
    "accounts": [
      {
        "balance": 0,
        "hash": "NativeLoader1111111111111111111111111111111",
        "AccountType": null,
        "owner": null,
        "rentEpoch": null,
        "createdAt": 0,
        "upgradeAuthority": null
      },
      {
        "balance": 1,
        "hash": "11111111111111111111111111111111",
        "AccountType": null,
        "owner": "NativeLoader1111111111111111111111111111111",
        "rentEpoch": 0,
        "createdAt": 0,
        "upgradeAuthority": null
      }
```
### accountByBalance
Returns the first 25 Accounts with the input balance

#### **Parameters**:
* AcctBalance: `<Float>` (Required) The balance of the account in lamports

#### Example:
```
query{
  accountByBalance(acctBal: 1141440){
  	hash
    balance
    data
  }
}
```

#### Result:
```
{
  "data": {
    "accountByBalance": [
      {
        "hash": "SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8",
        "balance": 1141440,
        "data": "AgAAANc5gByFhKTMS4SiwcYAMdAvBrqKB1JMLgCoMUSoJrrB"
      },
      {
        "hash": "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin",
        "balance": 1141440,
        "data": "AgAAALk0OyjVxscV3kUnBlXNDLMf1DnOeSjUyKR5YAjurHP6"
      }
    ]
  }
}

```

### accountByHash
Returns a specific account via the hash.

#### **Parameters**: 
* AccountHash: `<String>` (Required) The Hash of an Account

#### Example:
```
query{
  accountByHash(acctHash: "SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8"){
  	hash
    balance
    data
    upgradeAuthority
  }
}
```
#### Result:
```
{
  "data": {
    "accountByHash": {
      "hash": "SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8",
      "balance": 1141440,
      "data": "AgAAANc5gByFhKTMS4SiwcYAMdAvBrqKB1JMLgCoMUSoJrrB",
      "upgradeAuthority": null
    }
  }
}
```
### accountByOwner
Returns the accounts that have the same owner.

#### **Parameters**:
* Owner: `<String>` (required) The Owner of Account

#### Example:
```
query{
  accountByOwner(acctOwner: "11111111111111111111111111111111"){
    hash
    owner
    balance
  }
}
```

#### Result:
```
{
  "data": {
    "accountByOwner": [
      {
        "hash": "DE1bawNcRJB9rVm3buyMVfr8mBEoyyu73NBovf2oXJsJ",
        "owner": "11111111111111111111111111111111",
        "balance": 181616059448
      },
      {
        "hash": "7Np41oeYqPefeNQEHSv1UDhYrehxin3NStELsSKCT4K2",
        "owner": "11111111111111111111111111111111",
        "balance": 189011797602
      }
```

### accountByLabel
Returns the accounts that have the same label.

#### **Parameters**:
* Label: `<String>` (required) The Label of an Account

#### Example:
```
query{
  accountByLabel(acctLabel: "Stake Program"){
    hash
    owner
    balance
    label
  }
}
```

#### Result:
```
{
  "data": {
    "accountByLabel": [
      {
        "hash": "Stake11111111111111111111111111111111111111",
        "owner": "NativeLoader1111111111111111111111111111111",
        "balance": 1,
        "label": "Stake Program"
      }
    ]
  }
}
```


### accountByData
Returns the accounts that have the same data.

#### **Parameters**:
* Data: `<String>` (required) The data of an Account

#### Example:
```
query{
 accountByData(acctData: "c29sYW5hX3N5c3RlbV9wcm9ncmFt"){
  data
  }
}
```

#### Result:
```
{
  "data": {
    "accountByData": [
      {
        "data": "c29sYW5hX3N5c3RlbV9wcm9ncmFt"
      }
    ]
  }
}
```

### accountByCreation
Returns the accounts that are created at that point of time. 

#### **Parameters**:
* AcctCreatedAt: `<Float>` (required) A specific time (In Epochs)

#### Example:
```
query{
 accountByCreation(acctCreatedAt:1621619107){
  createdAt
  }
}
```

#### Result:
```
{
  "data": {
    "accountByCreation": [
      {
        "createdAt": 1621619107
      },
      {
        "createdAt": 1621619107
      },
      {
        "createdAt": 1621619107
      }
```

### accountByTopAccBal
Returns the accounts with the 10 largest holdings (In Lamports)

#### **Parameters**:
None

#### Example:
```
query{
 accountByTopAccBal{
  hash
  balance
	}
}
```

#### Result:
```
"data": {
    "accountByTopAccBal": [
      {
        "hash": "CakcnaRDHka2gXyfbEd2d3xsvkJkqsLw2akB3zsN1D2S",
        "balance": 189193618919
      },
      {
        "hash": "7Np41oeYqPefeNQEHSv1UDhYrehxin3NStELsSKCT4K2",
        "balance": 189011797602
      },
      {
        "hash": "GdnSyH3YtwcxFvQrVVJMm1JhTS4QVX7MFsX56uJLUfiZ",
        "balance": 187148343190
      },
      {
        "hash": "DE1bawNcRJB9rVm3buyMVfr8mBEoyyu73NBovf2oXJsJ",
        "balance": 181616059448
      }
```

### accountCreatedByTime

#### **Parameters**:
* TimeFrame `<Enum>` (required) ONE_DAY, ONE_WEEK, ONE_MONTH 

#### Example: 

### accountTopBalancesByToken

#### **Parameters**:
* tokenId `<String>` (required) Token Hash

#### Example: 
```
query{
  solana{
    accountTopBalancesByToken(tokenId = ""){

    }
  }
}
```

#### Result:
```

```

