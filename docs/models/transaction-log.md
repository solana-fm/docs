---
title: Transaction Log
---

### Elements of Transaction Log
* transactionHash: `<String>` 
* data: `<String>` 
* timestamp: `<DateTime>`
* line: `<Int>`

### transactionLogs


#### ** Parameters ** : 
- from: `<DateTime>` 
- to: `<DateTime>`
- paging: (Optional) 
  - page: `<Int>` 
  - limit: `<Int>`


#### Example:
```
query{
	solana{
   transactionLogs(date: {from:"2021-01-09T05:30:00Z", to: "2021-10-10T05:30:00Z"}){
    transactionHash
    data
  	}
	}
}

```

#### Result:
```
{
  "data": {
    "solana": {
      "transactionLogs": [
        {
          "transactionHash": "4ATViT4FmkNdK52vakMC1BGFmzWjioF6cmsM4uXKhKSi6AuQzX2ueuKd7r2c5eqUxPPtbNCwJnH6nhAhLsj955YF",
          "data": "Program Vote111111111111111111111111111111111111111 invoke [1]"
        }
```

### transactionLogsByHash
Returns transactionlogs via transactionHash


#### ** Parameters ** : 
- txHash: `<String>` (Required)
- from: `<DateTime>` 
- to: `<DateTime>`
- paging: 
  - page: `<Int>` 
  - limit: `<Int>`


#### Example:
```
query{
	solana{
   transactionLogsByHash(txHash:"5yKLn1mDtDPyMHm9AL8xNRQ5xM6m86gDgoqgGbDkCmwrDD5jw4Xj4jXf23dznrojtqir2xoBmxANd8rWAtvpzNSp"){
    transactionHash
    data
  	}
	}
}
```

#### Result:
```
{
  "data": {
    "solana": {
      "transactionLogsByHash": [
        {
          "transactionHash": "5yKLn1mDtDPyMHm9AL8xNRQ5xM6m86gDgoqgGbDkCmwrDD5jw4Xj4jXf23dznrojtqir2xoBmxANd8rWAtvpzNSp",
          "data": "Program Vote111111111111111111111111111111111111111 invoke [1]"
        },
        {
          "transactionHash": "5yKLn1mDtDPyMHm9AL8xNRQ5xM6m86gDgoqgGbDkCmwrDD5jw4Xj4jXf23dznrojtqir2xoBmxANd8rWAtvpzNSp",
          "data": "Program Vote111111111111111111111111111111111111111 success"
        }
      ]
    }
  }
}
```