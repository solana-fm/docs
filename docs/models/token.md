---
title: Token
---
More Queries COMING SOON!

For more information on Tokens: https://docs.solana.com/terminology#token

### Elements of Tokens
* hash: `<String>` Unique Identifier of a token
* name: `<String>` Name of Token
* abbreviation: `<String>`
* currentSupply: `<Float>` 
* mintAuthority: `<String>` 
* freezeAuthority: `<String>`  
* decimals: `<Int>` Number of decimals configured for token's mint.
* owner: `<String>` Owner of the Token
* genesisTimestamp: `<DateTime>`
* updatedTimestamp: `<DateTime>`


### tokens
Returns tokens


#### ** Parameters ** : 
- paging: (Optional) 
  - page: `<Int>` 
  - limit: `<Int>`
- from: `<DateTime>` 
- to: `<DateTime>` 

#### Example:
```
query{
  solana{
	  tokens{
      hash
    freezeAuthority
   }
  }
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "tokens": [
        {
          "hash": "4NPzwMK2gfgQ6rTv8x4EE1ZvKW6MYyYTSrAZCx7zxyaX",
          "freezeAuthority": null
        },
        {
          "hash": "8b9mQo6ZU2rwZQgSFqGNQvXzrUSHDTRpKSKi9XXdGmqN",
          "freezeAuthority": null
        }
```

### tokenByHash
Returns an instance of a token


#### ** Parameters ** : 
* Hash: `<String>` (required) Unique Identifier of a token


#### Example:
```
query{
  solana{
	  tokenByHash(tokenHash:"4NPzwMK2gfgQ6rTv8x4EE1ZvKW6MYyYTSrAZCx7zxyaX"){
      hash
      createdAt
      decimals
   }
  }
}
  
```

#### Result:
```
{
  "data": {
    "solana": {
      "tokenByHash": {
        "hash": "4NPzwMK2gfgQ6rTv8x4EE1ZvKW6MYyYTSrAZCx7zxyaX",
        "createdAt": 1622987450,
        "decimals": 0
      }
    }
  }
}
```
