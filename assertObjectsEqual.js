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


//actual function
// Returns true if both objects have identical keys with identical values.
const eqObjects = function(object1, object2) {
  let keysOfObject1 = Object.keys(object1);
  let keysOfObject2 = Object.keys(object2);

  if (keysOfObject1.length !== keysOfObject2.length) {
    return false;
  }

  for (let key of keysOfObject1) {
    if (Array.isArray(object1[key])) {
      if (Array.isArray(object2[key])) {
        if (eqArrays(object1[key], object2[key]) === false) {
          return false;
        }
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)} `)
  } else {
    console.log(`😔😔😔Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} `)
  }
};

const actual = { a: '1', b: 2 };
const expected = { b: 2, a: '1' };
const other = { a: '1', b: 2, c: 4 }

assertObjectsEqual(actual, expected);
assertObjectsEqual(actual, other);