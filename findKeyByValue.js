//assertEqual function;
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😍😍😍Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`😔😔😔Assertion Failed: ${actual} !== ${expected}`);
  }

};

//Actual Code:

const findKeyByValue = function(object, value){
  for (let key of Object.keys(object)) {
    if( object[key] === value){
    return key;
    }
  }
};

//TEST CODE
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(findkey, "The Wire"), "drama");
assertEqual(findKeyByValue(findkey, "That '70s Show"), undefined);