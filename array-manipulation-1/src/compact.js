/* exported compact */
function compact(array) {
  var results = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === false || array[i] === null || array[i] === 0 || array[i] === undefined || array[i] === '') {
      continue;
    }

    results.push(array[i]);
  }
  return results;
}
