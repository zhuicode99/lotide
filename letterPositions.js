
//Actual code
const letterPositions = function(sentence) {
  let newSentence = sentence.split('');
  let result = {};
  for (let i = 0; i < newSentence.length; i++) {
    let letter = newSentence[i];
    result[letter] = result[letter] ? [...result[letter],i]: [i];
  }
  return result;
};

console.log(letterPositions("hello"))
assertArraysEqual(letterPositions("hello").l, [2, 3]);


module.exports = letterPositions;