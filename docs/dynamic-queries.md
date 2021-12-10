---
id: dynamic-queries
title: Dynamic Queries
sidebar_position: 3
---

# Dynamic Queries

These dynamic queries work the same as SQL. 

### Elements:
* _and 
* _or 
* _eq: equals to 
* _neq: not equals to
* _isNull
* _like
* _notLike
* _in: 
* _lt: less than
* _gt: greater than 

## Where
To extract only those records that fulfill a specified condition.


#### Example:
```
query{
  solana{
    accounts(where:{balance:{_eq:1141440}}){
    hash
    balance
    }
  }
}

```

#### Result: 
```
{
  "data": {
    "solana": {
      "accounts": [
        {
          "hash": "SwaPpA9LAaLfeLi3a68M4DjnLqgtticKg6CnyNwgAC8",
          "balance": 1141440
        },
        {
          "hash": "9xQeWvG816bUx9EPjHmaT23yvVM2ZWbrrpZb9PusVFin",
          "balance": 1141440
        }
      ]
    }
  }
}
```


## orderBy 


#### Example:
```
query{
  solana{
    accounts(orderBy:{balance:desc}){
    hash
    balance
    }
  }
}
```

#### Result: 
```
{
  "data": {
    "solana": {
      "accounts": [
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
        }
```
## Distinct: 


### Example: 
```
query{
  solana{
    accounts(distinct:hash){
    hash
    balance
    }
  }
}
```

### Result:
```
{
  "data": {
    "solana": {
      "accounts": [
        {
          "hash": "11111111111111111111111111111111",
          "balance": 1
        },
        {
          "hash": "4785anyR2rYSas6cQGHtykgzwYEtChvFYhcEgdDw3gGL",
          "balance": 8055353873
        }
```
