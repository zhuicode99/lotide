
//Actual function

const countLetters = function(word) {
  let newWord = word.split('');
  let result = {};
  for (let char of newWord) {
    result[char] = result[char] ? result[char] + 1 : 1;
  }
  return result;
};




module.exports = countLetters;