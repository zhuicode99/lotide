
//Actual Codes
const takeUntil = function(array, callback) {
  
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array.slice(0, Number(i));
    }
  }
};
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);





module.exports = takeUntil;