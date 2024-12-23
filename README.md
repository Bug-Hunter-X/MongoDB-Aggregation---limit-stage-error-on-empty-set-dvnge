# MongoDB Aggregation Pipeline Error: $limit on Empty Set

This repository demonstrates a common error in MongoDB aggregation pipelines where the `$limit` stage is applied to an empty set of documents. This typically happens when the preceding stages, like `$match`, filter out all documents, resulting in an empty pipeline before reaching `$limit`.

The `bug.js` file contains the code that reproduces this error. The `bugSolution.js` file provides a corrected version with a robust approach to handle empty sets.

## How to reproduce

1.  Clone this repository.
2.  Ensure you have a MongoDB instance running.
3.  Replace the placeholder collection name in `bug.js` with a real collection in your database.
4.  Run `bug.js` with a condition that filters all documents, either initially or through a combination of filtering stages.

## Solution

The solution demonstrates a better way to handle potential empty sets in MongoDB aggregation pipelines, avoiding the error.