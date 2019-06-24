const button = document.getElementById('button').onclick = function changeColor() {
    document.body.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
}