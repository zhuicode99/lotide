
const eqArrays = function(arr1, arr2)  {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1.every((elem, i) => elem === arr2[i]) && arr1.length === arr2.length) {
      return console.log("true");
    }
  }
  return console.log("false");
};

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]);// => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

