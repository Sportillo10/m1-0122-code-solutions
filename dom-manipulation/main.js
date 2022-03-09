var numberOfButtonClicked = 0;

var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  numberOfButtonClicked++;
  var temperature;
  if (numberOfButtonClicked < 4) {
    temperature = 'cold';
  } else if (numberOfButtonClicked < 7) {
    temperature = 'cool';
  } else if (numberOfButtonClicked < 10) {
    temperature = 'tepid';
  } else if (numberOfButtonClicked < 13) {
    temperature = 'warm';
  } else if (numberOfButtonClicked < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }
  $hotButton.className = 'hot-button ' + temperature;
  $clickCount.textContent = 'Clicks: ' + numberOfButtonClicked;
});
