// your code here
const output = document.getElementById('output');

function updateOutput() {
  output.textContent = window.location.href;
  event.preventDefault();
}

const submitButton = document.getElementById('button');
submitButton.addEventListener('click', updateOutput);