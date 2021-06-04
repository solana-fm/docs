---
title: Token
---

For more information on Tokens: https://docs.solana.com/terminology#token

### Elements of Tokens
* hash: `<String>` Unique Identifier of a token
* name: `<String>` Name of Token
* currentSupply: `<Float>` Current Supply of token
* mintAuthority: `<String>` 
* freezeAuthority: `<String>`  This allows them to freeze the assets in a given account at will, rendering the account unusable until thawed
* decimals: `<Float>` Number of decimals configured for token's mint.
* createdAt: `<Float>` Time the token is created at (in Epochs)
* owner: `<String>` Owner of the Token
* entityProperties: `<[entityProperties]>`  



### tokens
Returns tokens


#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>` Start of Page 


#### Example:
```
query{
	tokens{
  
  }
}
```

#### Result:
```

```

### tokenByHash
Returns an instance of a token


#### ** Parameters ** : 
* Hash: `<String>` (required) Unique Identifier of a token


#### Example:
```
query{
	tokenByHash{
  
  }
}
```

#### Result:
```

```
