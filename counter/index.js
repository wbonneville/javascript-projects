const counter = document.getElementById('amount');
const addCount = document.getElementById('addCount');
const lowerCount = document.getElementById('lowerCount');

addCount.addEventListener('click', incrementCount);
lowerCount.addEventListener('click', decrementCount);

let amount = 0; // Global variable (?)

function incrementCount() {
    amount++;
    counter.innerHTML = amount
}

function decrementCount() {
    amount--;
    counter.innerHTML = amount;
}