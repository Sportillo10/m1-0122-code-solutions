var student = {
  firstName: 'Steve',
  lastName: 'Portillo',
  age: 29
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'IT';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation', student.previousOccupation);

console.log('value of student:', student);

var vehicle = {
  make: 'lexus',
  model: 'SC400',
  year: 1993
};

vehicle['color'] = 'white';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);

console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Odin',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet;', pet);
