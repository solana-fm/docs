For more Information on Blocks: https://docs.solana.com/developing/programming-model/accounts



### Elements of Blocks
* Number : `<Float>` Unique Identifier of a Block 
* Hash: `<String>` The Hash of the Block
* IsConfirmed: `<Boolean>` If the Block is Confirmed in the ledger
* Timestamp: `<Float>` Production Time of a block 
* Proposer: `<String>` The Proposer of the Block
* Parent: `<String>` The Parent of the Block 
* IsSkipped: `<Boolean>` If an Block is skipped
* EpochId: `<Float>` The epoch the block belongs to
* Finality: `<Boolean>` Confirmation of the Block
* CreatedAt: `<Float>` Time (in epochs) the Block was created at  
* Transactions: `<List>` The transactions involved in the Block 


### Blocks
Returns first 25 Blocks

#### ** Parameters ** : 

None 

#### Example:
```
query{
	blocks{
  	hash
    CreatedAt
    isSkipped
	}
}
```


#### Result:
```
{
  "data": {
    "blocks": [
      {
        "hash": "DmDcyyexLcANQmQisb759G8GwWmMEdbFmd8EhWPuQKof",
        "CreatedAt": null,
        "isSkipped": false
      },
      {
        "hash": "2nprnTyVLKcQXtJyj1XGEjXgRonV2pWvRimG4eTFS5i1",
        "CreatedAt": null,
        "isSkipped": false
      },
      {
        "hash": "ADRpYBgDP2FFbakbfKxZcoaLTaE87pPXaCS6sUWRbMr4",
        "CreatedAt": null,
        "isSkipped": false
      }
```

### BlockByNum
Returns a specific instance of a block


#### ** Parameters ** : 
* Number: `<int>` Block Number

#### Example:
```
query{
	blockByNum(number: 43777){
    hash
    isConfirmed
    timestamp
  }
}
```

#### Result:
```
{
  "data": {
    "blockByNum": {
      "hash": "ADRpYBgDP2FFbakbfKxZcoaLTaE87pPXaCS6sUWRbMr4",
      "isConfirmed": true,
      "timestamp": 0
    }
  }
}
```




