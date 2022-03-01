/* exported countdown */
function countdown(number) {
  var results = [0];
  for (var i = 1; i <= number; i++) {
    results.unshift(i);
  }
  return results;
}
