/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var output = [];
  for (var i = 0, length = words.length; i < length; i++) {
    output.push(words[i] + suffix);
  }
  return output;
}
