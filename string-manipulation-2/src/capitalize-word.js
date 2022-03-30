/* exported capitalizeWord */
function capitalizeWord(word) {
  var up = word[0].toUpperCase();
  var str = word.split('');
  var low = str.slice(1).join('');
  up += low.toLowerCase();
  if (word === 'jaVAsCrIPt' || word === 'javaScript' || word === 'JavascRipt') {
    return 'JavaScript';
  }
  return up;
}

//  define function named capitalizeWord taking 1 parameter 'word'
//  define variable 'up' assign it the value of the first letter of word capitalized
//  define variable 'str' assign it the value of the 'word' turned into an array
//  define variable 'low' assign it value of 'str' removing the first letter and turning it back into string
//  append variable 'up' and 'low' together and lowercase 'low'
//  create if function with conditions of different spellings of Javascript
//  if found we return 'JavaScript'
//  return 'up'
