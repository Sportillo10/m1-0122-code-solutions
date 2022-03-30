/* exported equal */
// var firstString = first.toString();
// var secondString = second.toString();
// console.log(typeof firstString);
// console.log(secondString);
// if (firstString === secondString) {
//   return true;
// } else if (firstString === '[object Object],[object Object]' && secondString === '[object Object],[object Object]') {
//   first
// }
function equal(first, second) {
  if (first.length === second.length && first.every((j, i) => j === second[i])) {
    return true;
  } else {
    return false;
  }
}
