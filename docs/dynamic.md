---
id: DynamicQ
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
* _in: To come soon
* _lt: less than
* _gt: greater than 

## Where
To extract only those records that fulfill a specifified condition.


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


## orderBy 


## Distinct 

