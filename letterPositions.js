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


//Actual code
const letterPositions = function(sentence) {
  let newSentence = sentence.split('');
  let result = {};
  for (let i = 0; i < newSentence.length; i++) {
    let letter = newSentence[i];
    result[letter] = result[letter] ? result[letter].push(i) : [i];
  }
  return result;
};

assertArraysEqual(letterPositions("hello").e, [1]);
/*
{
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
} */