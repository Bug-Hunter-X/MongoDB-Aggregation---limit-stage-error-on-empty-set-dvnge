```javascript
//Incorrect Aggregation Pipeline
db.collection.aggregate([
  {
    $match: { condition: true }
  },
  {
    $group: { 
      _id: "$field", 
      count: { $sum: 1 }
    }
  },
  {
    $sort: { count: -1 }
  },
  {
    $limit: 10  // This line may cause error if no documents match the condition
  }
])
```