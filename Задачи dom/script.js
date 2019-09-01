//Задание 1

var container = document.querySelector('.container');

var block = document.createElement('div');

container.appendChild(block);

block.textContent = 'Этот элемент создан при помощи DOM API';

// Задание 2

var newBlock = document.createElement('div');

block.appendChild(newBlock);

newBlock.classList.add('inner');

newBlock.textContent =  'Этот элемент тоже создан при помощи DOM API';

// Задание 3

newBlock.style.color = "red";

// Задание 4

block.addEventListener('click',function(){
	console.log('Этот текст говорит о том, что я всё сделал правильно');
});

// Задание 5

let link = document.createElement('a');
link.textContent = 'Я ссылка';

link.setAttribute('href','https://loftschool.com');

container.appendChild(link);

link.addEventListener('click',function(evt) {
	evt.preventDefault();
	alert('Я кликнул на ссылку '+ link.getAttribute('href'));
})

// Задаие 6 

let input = document.createElement('input');
let button = document.createElement('button');

container.appendChild(input);
container.appendChild(button);

button.textContent = "Press Me";

button.addEventListener('click', function(evt){
	evt.preventDefault();
	alert(input.value);
});

// Задание 7



const left = document.querySelector("#left");
const right = document.querySelector("#right");
const items = document.querySelector("#items");
const computed = getComputedStyle(items);

right.addEventListener("click", function(evt) {
  evt.preventDefault();
  let currentRight = parseInt(computed.right);
  
  if(currentRight < 500) {
    items.style.right = currentRight + 100 + "px";
  };
      
});

left.addEventListener("click", function(evt) {
  evt.preventDefault();
  let currentRight = parseInt(computed.right);
  
  if(currentRight > 0) {
    items.style.right = currentRight - 100 + 'px';
  };
    
});