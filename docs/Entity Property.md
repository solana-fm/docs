
### Elements of Entity Properties
* hash: `<Float>` Unique Identifier of a Cluster
* firstBlock: `<Float>` The first Block of the Cluster
* clusterType: `<String>` 
* statusType: `<String>` 


### clusters
Returns the first 25 clusters


#### ** Parameters ** : 

None

#### Example:
```
query{
	clusters{

  }
}
```

#### Result:
```

```

### clusterbyKeyPair
Returns a specific instance of a cluster


#### ** Parameters ** : 
* genKeypair: `<Float>` Unique Identifier of a Cluster


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