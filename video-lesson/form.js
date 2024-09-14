let form = document.getElementById('myForm');
let result = document.getElementById('result');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  let name = document.getElementById('inputName').value;
  result.textContent = `Привет, ${name}`;
});
