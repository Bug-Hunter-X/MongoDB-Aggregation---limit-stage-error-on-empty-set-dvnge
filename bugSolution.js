```javascript
//Corrected Aggregation Pipeline
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
    $limit: 10
  }
]).toArray().then(result => {
  if(result.length === 0){
    console.log("No documents matched the criteria");
  } else {
    console.log(result);
  }
})
```