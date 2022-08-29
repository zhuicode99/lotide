const eqArrays = require('./eqArrays')

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("True, these two arrays are equal");
  } else {
    console.log("False, these two arrays aren't equal");
  }
};


// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
assertArraysEqual([1, 2, 3], [3, 2, 1]);// => false

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false


module.exports = assertArraysEqual;