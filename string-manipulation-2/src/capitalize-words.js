/* exported capitalizeWords */
function capitalizeWords(string) {
  var str = string.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(' ');
}

//  define function named 'capitalizeWords' taking 1 parameter 'string'
//  define variable 'str' and assign it 'string' lowercase and turned into an array at each ' '
//  set up a for loop that iterates through each word capitalizing the first letter
//  also adding the words minus the first letter
//  turn str back into a string
//  return 'str'
