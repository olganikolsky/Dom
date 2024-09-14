let button1 = document.getElementById('saveLocal');
localStorage.setItem('username', 'Olga');
button1.addEventListener('click', function () {
  button1.innerHTML = '<p>Данные успешно сохранены</p>';
});

sessionStorage.setItem('username', 'Andrey');
let button2 = document.getElementById('saveSession');
button2.addEventListener('click', function () {
  document.body.innerHTML += '<p>Данные успешно сохранены</p>';
});
