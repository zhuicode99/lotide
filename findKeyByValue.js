
//Actual Code:

const findKeyByValue = function(object, value){
  for (let key of Object.keys(object)) {
    if( object[key] === value){
    return key;
    }
  }
};





module.exports = findKeyByValue;