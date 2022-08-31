
const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let arr of source) {
    if (!itemsToRemove.includes(arr)) {
      newArr.push(arr);
    }
  }
  return newArr;
};

//(!itemsToRemove.includes(arr)): means anything not included in itemsToRemove array
//will be pushed to the newArr;



module.exports = without;