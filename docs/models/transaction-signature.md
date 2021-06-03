---
title: Transaction Signature
---

For more information of a transaction signature: https://docs.solana.com/developing/programming-model/transactions#signatures

### Elements of Transaction Signature
* transactionHash: `<String>` Unique Identifier of a Transaction
* signature: `<String>` Unique Identifier of a Transaction Signature

### transactionSignatures
Returns Transaction Signatures


#### ** Parameters ** : 

None

#### Example:
```
query{
	transactionSignatures{
  
  }
}
```

#### Result:
```

```

### transactionSignatureByTxHash
Returns of a list of transaction signatures via transaction Hash


#### ** Parameters ** : 
* txHash: `<String>` (required) Unique Identifier of a transaction 


#### Example:
```
query{
	transactionSignatureByTxHash(txHash: ""){
  
  }
}
```

#### Result:
```

```

### transactionSignatureBySignature
Returns of a specific instance of Transaction Signature via signature


#### ** Parameters ** : 
* signature: `<String>` (required) Unique Identifier of a transaction signature 


#### Example:
```
query{
	transactionSignatureBySignature(Signature: ""){
  
  }
}
```

#### Result:
```

```