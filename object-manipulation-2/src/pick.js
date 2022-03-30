/* exported pick */
function pick(source, keys) {
  var obj = {};
  // var value = Object.keys(source);
  for (var i = 0; i < keys.length; i++) {
    obj[keys[i]] = source[keys[i]];

    if (typeof obj[keys[i]] === 'undefined') {
      delete obj[keys[i]];
    }
  }
  return obj;
}

//  define function named 'pick' takes 2 parameters 'source' and 'keys'
//  define variable 'obj' assign it value of empty object
//  using for of loop, loop through the object searching for the keys
//  push the matching keys into the empty object variable
//  return 'obj' variable
