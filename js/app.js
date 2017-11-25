window.addEventListener('load', begin);

var input = document.getElementById('click-id');
var texarea = document.getElementById('twittext-id');
var container = document.getElementById('container-id');

function begin() {
  
  input.addEventListener('click', submit);
}

function submit(event){
  event.preventDefault();

  var text = texarea.value; 
  
  var div = document.createElement('div');
  
  div.textContent = text;

 container.appendChild(div); 
}