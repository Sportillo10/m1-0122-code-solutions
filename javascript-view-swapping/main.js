var $tabContainer = document.querySelector('.tab-container');

var $tabNodeList = document.querySelectorAll('.tab');

var $viewNodeList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  var $tab = event.target;

  if ($tab.matches('.tab') === true) {
    for (var i = 0; i < $tabNodeList.length; i++) {
      if ($tab === $tabNodeList[i]) {
        $tabNodeList[i].className = 'tab active';
      } else {
        $tabNodeList[i].className = 'tab';
      }
    }
  }
  if ($tab.matches('.tab') === true) {
    var $tabAtt = $tab.getAttribute('data-view');

    for (i = 0; i < $viewNodeList.length; i++) {
      var $viewAtt = $viewNodeList[i].getAttribute('data-view');

      if ($tabAtt === $viewAtt) {
        $viewNodeList[i].className = 'view';
      } else {
        $viewNodeList[i].className = 'hidden';
      }

    }
  }
});
