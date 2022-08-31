

//Actual Code:
const findKey = function(object, func) {
  for (let key of Object.keys(object)) {
    if (func(object[key])) {
      return key;
    }
  }
};





module.exports = findKey;



