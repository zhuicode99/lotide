const assertEqual = require('./assertEqual')

const head = function(arr) {
  let firstNum = arr[0];
  return (arr, firstNum);
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


