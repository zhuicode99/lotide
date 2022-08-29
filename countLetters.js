//assertEqual function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }

};


//Actual function

const countLetters = function(word) {
  let newWord = word.split('');
  let result = {};
  for (let char of newWord) {
    result[char] = result[char] ? result[char] + 1 : 1;
  }
  return result;
};







/* console.log(countLetters('LHL') ) */

assertEqual(countLetters('LHL'), {L:2, H:1});
/*
{
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
} */