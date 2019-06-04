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
var reverseButton = document.getElementById('buttonReverse')
var reversedResult = document.getElementById('resultReverse')

reverseButton.addEventListener('click', returnString)


function reverseString(str) {
  return str.split('').reverse().join('')
}

function returnString () {
  reverseResult.innerHTML = reverseString(string.value)
  console.log(reverseResult)
}

// End of Reverse
// Factorialize

var numberToFactor = document.getElementById('number')
var factorButton = document.getElementById('factorializeNumber')
var factoredNumber = document.getElementById('factoredNumber')

factorButton.addEventListener('click', callFactorialize)

function callFactorialize() {
  factoredNumber.innerHTML = factorialize(numberToFactor.value)
}

function factorialize(num) {
  if (num < 0) return;
  if (num === 0) return 1;
  return num * factorialize(num - 1)
}

