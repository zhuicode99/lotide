const assertEqual = require('./assertEqual');

const tail = function(arr) {
  let tailNum = arr.slice(1);
  return (arr, tailNum);
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!


