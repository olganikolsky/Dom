//Задача 1: DOM-дерево
let button = document.getElementById('myButton');
button.textContent = 'Нажми меня';
button.addEventListener(
  'mouseover',
  () => (button.style.backgroundColor = 'red')
);
