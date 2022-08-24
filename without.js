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

const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let arr of source) {
    if (!itemsToRemove.includes(arr)) {
      newArr.push(arr);
    }
  }
  return newArr;
};

//(!itemsToRemove.includes(arr)): means anything not included in itemsToRemove array
//will be pushed to the newArr;

// TEST CODE

console.log(without([1, 2, 3], [1])); // => [2, 3])
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"])


const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));