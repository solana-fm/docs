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
- from: `<DateTime>` (Required)
- to: `<DateTime>` (Required)

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
