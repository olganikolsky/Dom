const form = document.getElementById('myForm');
form
  .addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(form);
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: formData,
    });
  })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log('Ошибка', error));
