const colorBtn = document.querySelector('.colorBtn');
const bodyColor = document.querySelector('body');

const colors = ['red', 'blue', 'green', 'purple', 'pink'];

colorBtn.addEventListener('click',changeIt);
function changeIt() { 
let random = Math.floor(Math.random()*colors.length)
bodyColor.style.backgroundColor = colors[random];

}
