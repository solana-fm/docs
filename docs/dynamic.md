---
id: DynamicQ
title: Dynamic Queries
sidebar_position: 3
---

# Dynamic Queries

These dynamic queries work the same as SQL. 



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

