// your code here
const name = document.getElementById('name');
const year  = document.getElementById('year');

function updateOutput() {
  output.textContent = "https://localhost:8080/" +  name + year ;
  event.preventDefault();
}

const submitButton = document.getElementById('button');
submitButton.addEventListener('click', updateOutput);