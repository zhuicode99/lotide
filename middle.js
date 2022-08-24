//eqArrays function
const eqArrays = function(arr1, arr2)  {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//assertArraysEqual function
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log("True, these two arrays are equal");
  } else {
    console.log("False, these two arrays aren't equal");
  }
};


//Actual Function

const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  let half = Math.floor(array.length / 2);
  if (array.length % 2) {
    return [array[half]];
  }
  return [array[half - 1],array[half]];
};



/* //TEST CODE
console.log(middle([1])) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArraysEqual(middle([1]), []) */