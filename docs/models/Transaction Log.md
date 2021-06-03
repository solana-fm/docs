
### Elements of Transaction Log
* transactionHash: `<String>` Unique Identifier of a Transaction
* data: `<String>` Data a transaction has

### transactionLogs
Returns transactionlogs


#### ** Parameters ** : 

None

#### Example:
```
query{
	transactionLogs{
  
  }
}
```

#### Result:
```

```

### transactionLogsByHash
Returns of a transactionlog


#### ** Parameters ** : 
* txHash: `<String>` (required) Unique Identifier of a transaction (Required)


#### Example:
```
query{
	txHash{
  
  }
}
```

#### Result:
```

```