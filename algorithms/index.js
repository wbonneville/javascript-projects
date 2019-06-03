var input = document.getElementById('input')
var button = document.getElementById('button');
var result = document.getElementById('result');

button.addEventListener('click', callFunction)

function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32
    return fahrenheit;
    
  }
  
function callFunction () {
    result.innerHTML = convertToF(input.value)
}
