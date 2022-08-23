const tail = function(arr) {
  let tailNum = arr.slice(1);
  return (arr, tailNum);
};

const assertEqual = function(actual, expected) {
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] === expected[i] && actual.length === expected.length) {
      return console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
    }
  }
  return console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


