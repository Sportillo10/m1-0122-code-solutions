var num0 = 90;
var num1 = 70;
var num2 = 80;
var maximumValue = Math.max(num0, num1, num2);

console.log('maximumValue:', maximumValue);

var heros = ['Moon Knight', 'Spider-Man', 'Deadpool', 'Gambit'];
var randomNumber = Math.random();
randomNumber = randomNumber * heros.length;
var randomIndex = Math.floor(randomNumber);

console.log('randomIndex;', randomIndex);

var randomHero = heros[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Star Wars: Light of the Jedi (The High Republic)',
    author: 'Charles Soule'
  },
  {
    title: 'Star Wars: The Rising Storm',
    author: 'Cavan Scott'
  },
  {
    title: 'Star Wars: Darth Bane: Rule of Two',
    author: 'Drew Karpyshyn'
  }
];
var lastBook = library.pop();

console.log('lastBook:', lastBook);

var firstBook = library.shift();

console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);

console.log('library:', library);

var fullName = 'Steve Portillo';
var firstAndLastName = fullName.split(' ');

console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('sayMyName:', sayMyName);
