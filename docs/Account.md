
For more Information on Accounts: https://docs.solana.com/developing/programming-model/accounts



### Elements of Accounts
* Hash : The Hash of a specific account
* AccountType: The Type of the account
* Balance: The Balance of the account in lamports
* Data: The Data the account contains
* Owner: The Owner of the account
* Label: The Label of the account 
* Executable: If an account can execute a program
* Upgrade Authority: The ability to deploy a program
* RentEpoch: Epoch at which this account will next owe rent
* CreatedAt: Time (in epochs) it was created at  


### accounts

```
/api/v1/Accounts
```

Returns first 25 accounts
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


### Result:
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