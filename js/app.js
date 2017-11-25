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

    if (event.target.value.length > maxText) {
      input.disabled = true;
      /* counte.style.color = 'red'; */
      counte.classList.add('red');
      counte.classList.remove('orange', 'green');
    } else if (event.target.value.length > 130) {
      /* counte.style.color = 'orange'; */
      counte.classList.add('orange');
      counte.classList.remove('red', 'green');
    } else if (event.target.value.length > 120) {
      /* counte.style.color = "green"; */
      counte.classList.add('green');
      counte.classList.remove('orange', 'red');
    } else {
      counte.classList.remove('orange', 'red', 'green');
    }
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