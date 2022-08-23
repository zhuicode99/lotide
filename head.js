

const head = function(arr) {
  let firstNum = arr[0];
  return (arr, firstNum);
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


/* // TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1); */