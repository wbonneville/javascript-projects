const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen')
const equalBtn = document.getElementById('equalBtn');
const clearBtn = document.getElementById('cBtn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
        let number = btns[i].getAttribute('data-num');
        screen.value += number
    })
}

equalBtn.addEventListener('click', function() {
    if(screen.value === ''){
        alert('Empty input...')
    }
    else {
let value = eval(screen.value);
screen.value = value;
}

})

clearBtn.addEventListener('click', function() {
    screen.value = '';
})
