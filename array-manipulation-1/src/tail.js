/* exported tail */
// I need to make a function named tail with one parameter set to array.
// Then set a variable labeled results set to an empty array.
function tail(array) {
  var results = [];
  for (var i = 1; i < array.length; i++) {
    results.push(array[i]);
  }
  return results;
}
