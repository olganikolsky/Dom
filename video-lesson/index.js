let tyr = document.getElementById('title');
tyr.textContent = 'Vtrnh';

let paragraph = document.querySelector('.par');
paragraph.style.color = 'pink';

let listItems = document.querySelectorAll('li');
listItems.forEach((item) => (item.style.color = 'blue'));

let boxes = document.getElementsByClassName('box');
for (let box of boxes) {
  box.style.border = '1px solid black';
}

let containers = document.getElementById('container');
containers.innerHTML = '<p>меня создали в js</p>';
containers.style.border = '1px solid black';

let links = document.getElementById('link');
console.log(links.getAttribute('href'));
links.setAttribute('href', 'https//example2.com');
console.log(links.getAttribute('href'));

let box = document.getElementById('box3');
box.classList.add('blue-box');
box.classList.remove('red-box');

let button = document.getElementById('myButton');
let text = document.getElementById('forButton');
button.addEventListener(
  'click',
  () => (text.textContent = 'На меня нажали!')
);
