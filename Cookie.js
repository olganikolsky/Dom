let button = document.getElementById('setCookie');
button.addEventListener('click', function () {
  (document.cookie = 'username:JohnDoe'),
    (document.body.innerHTML += '<p>Успешно установлены</p>');
});
