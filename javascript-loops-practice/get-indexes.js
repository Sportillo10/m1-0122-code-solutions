/* exported getIndexes */
function getIndexes(array) {
  var indexesOfWords = [];
  for (var i = 0; i < array.length; i++) {
    indexesOfWords[i] = i;
  }
  return indexesOfWords;
}
