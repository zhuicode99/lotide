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