---
title: Cluster
---

For more information on clusters: https://docs.solana.com/cluster/overview

### Elements of Transactions
* genKeypair: `<Float>` Unique Identifier of a Cluster
* firstBlock: `<Float>` The first Block of the Cluster
* clusterType: `<String>` 
* statusType: `<String>` 


### clusters
Returns clusters


#### ** Parameters ** : 
* Paging: (Optional) `<int>` 
  - Page: `<int>`Start of Page 


#### Example:
```
query{
  solana{
    clusters{

    }
  }
}
```

#### Result:
```

```

### clusterbyKeyPair
Returns a specific instance of a cluster


#### ** Parameters ** : 
* genKeypair: `<Float>` (required) Unique Identifier of a Cluster


#### Example:
```
query{
	clusterbyKeyPair(genKeyPair:213){

  }
}
```

#### Result:
```

```