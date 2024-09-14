//Обработчики событий
let inputBut = document.getElementById('textInput');
let paragraph = document.getElementById('displayText');
inputBut.addEventListener('input', function () {
  let result = document.getElementById('textInput').value;
  paragraph.textContent = `${result}`;
});
