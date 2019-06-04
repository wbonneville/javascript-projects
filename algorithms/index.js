// Temp

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

// End of Temp
// Reverse

var string = document.getElementById('string')
var button = document.getElementById('buttonReverse')
var result = document.getElementById('resultReverse')

button.addEventListener('click', returnString)


function reverseString(str) {
  return str.split('').reverse().join('')
}

function returnString () {
  resultReverse.innerHTML = reverseString(string.value)
  console.log(resultReverse)
}