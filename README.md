[![Build Status](https://travis-ci.org/bakasho-libs/core.to_array.svg?branch=master)](https://travis-ci.org/bakasho-libs/core.to_array)

## core.to_array

Convert a value into an array

```javascript

var toArray = require("core.to_array");

// all return empty array []
toArray(true);
toArray(null);
toArray(undefined);
toArray(NaN);
toArray(45);

toArray("foo"); // returns ["f", "o", "o"]

toArray({ foo: 1, bar: 2}); // returns [["foo", 1],["bar", 2]];



```
