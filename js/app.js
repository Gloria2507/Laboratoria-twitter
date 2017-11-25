window.addEventListener('load', begin);

var input = document.getElementById('click-id');
var texarea = document.getElementById('twittext-id');
var container = document.getElementById('container-id');
var counte = document.getElementById('count');
var maxText = 140;

function begin() {

  input.addEventListener('click', submit);
  texarea.addEventListener('keyup', validar);
}
function validar(event) {
  if (event.target.value) {
    input.disabled = false;
    counte.textContent = maxText - event.target.value.length;
  } else {
    input.disabled = true;
    counte.textContent = maxText;
  }
}

function submit(event) {
  event.preventDefault();

  var text = texarea.value;
  if (text) {
    var div = document.createElement('div');

    div.textContent = text;

    container.appendChild(div);
  }
}