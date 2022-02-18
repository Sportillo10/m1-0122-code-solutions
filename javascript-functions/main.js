function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  var greeting = 'Hey, ' + name;
  return greeting;
}

var greetResult = greet('Bevis');

console.log('greetResult:', greetResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);

console.log('areaResult:', areaResult);

function getFirstName(person) {
  var firstName = person.firstName;
  return firstName;
}

var onlyFirstName = { firstName: 'Lelouch', lastName: 'Lamprouge' };
var getFirstNameResult = getFirstName(onlyFirstName);

console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}

var lastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);

console.log('lastElementResult:', lastElementResult);
