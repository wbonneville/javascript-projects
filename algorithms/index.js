// Temp

var input = document.getElementById('input')
var button = document.getElementById('button');
var result = document.getElementById('result');
var string = document.getElementById('string')
var reverseButton = document.getElementById('buttonReverse')
var reversedResult = document.getElementById('resultReverse')
var numberToFactor = document.getElementById('number')
var factorButton = document.getElementById('factorializeNumber')
var factoredNumber = document.getElementById('factoredNumber')
var longStringInput = document.getElementById('longString');
var checkLongestWord = document.getElementById('checkLongestWord');
var longestWord = document.getElementById('longestWord');

button.addEventListener('click', callFunction)

function convertToF(celsius) {
    let fahrenheit = celsius * (9/5) + 32
    return fahrenheit;
    
  }
  
function callFunction () {
    result.innerHTML = convertToF(input.value)
}

// End of temp
// Reverse



reverseButton.addEventListener('click', returnString)


function reverseString(str) {
  return str.split('').reverse().join('')
}

function returnString () {
  reverseResult.innerHTML = reverseString(string.value)
  console.log(reverseResult)
}

// End of reverse
// Factorialize



factorButton.addEventListener('click', callFactorialize)

function callFactorialize() {
  factoredNumber.innerHTML = factorialize(numberToFactor.value)
}

function factorialize(num) {
  if (num < 0) return;
  if (num === 0) return 1;
  return num * factorialize(num - 1)
}

// End of factorialize
// Find longest word



checkLongestWord.addEventListener('click', callFinderFunction)


function callFinderFunction () {
  longestWord.innerHTML = findLongestWordLength(longStringInput.value);
}

function findLongestWordLength(str) {
  var words = str.split(' ');
  var maxLength = 0;

  for (var i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
      maxLength = words[i].length;
    }
  }

return maxLength;

}

// End longest word

// Largest number

var numberInput = document.getElementById('numberGroup')
var numberButton = document.getElementById('checkLargestNumber')
var largestNumberPrinted = document.getElementById('largestNumber')

numberButton.addEventListener('click', callNumberFunction)

function callNumberFunction () {
  largestNumberPrinted.innerHTML = largestOfFour(numberInput.value)
}

function largestOfFour(arr) {
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }
    results[n] = largestNumber;
  }

return results;

}

