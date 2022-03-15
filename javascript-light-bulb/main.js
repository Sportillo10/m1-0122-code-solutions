// document.querySelector()
// addEventListener()
// element.className
// click event

function lightSwitch() {
  var el = document.getElementById('light-switch');
  var body = document.body;
  if (el.className === 'active-light') {
    el.className = 'inactive-light';
    body.style.backgroundColor = 'rgb(18 18 18)';
  } else {
    el.className = 'active-light';
    body.style.backgroundColor = 'rgb(231 229 226)';
  }
}

var el = document.getElementById('light-switch');
el.addEventListener('click', lightSwitch);
