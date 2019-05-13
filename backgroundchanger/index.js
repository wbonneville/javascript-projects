
/* The variable 'button' is set equal to the current color of background set by the CSS */
/* An event listener listening for a "click" is added to the button. Thus, when the button is clicked, a function is executed. */
/* When the function is executed, the const currentColor is set to the current color of the background set by the CSS */
/* "If" statement: Whatever is selected by document (in this case it is the body) is equal to currentColor. Is currentColor === to red? Then change to blue. Is it blue? Change to red. */


var button = document.getElementById("button");


button.addEventListener("click", function() {

    const currentColor = document.body.style.backgroundColor;

    document.body.style.backgroundColor = currentColor === 'red' ? 'blue' : 'red';
})

function calc() {
    
var a = parseInt(document.getElementById("value1").value)
var b = parseInt(document.getElementById("value2").value)
var op = document.getElementById("operator").value
var calculate;

if (op == "add") {
    calculate = a + b 
} else if (op == "min") {
    calculate = a - b
} else if (op == "div") {
    calculate = a / b
} else if (op = "mul") {
    calculate = a * b
}

document.getElementById("result").innerHTML = calculate

}

var newText = "meheheh"

function changeText() {
    document.getElementById("test").innerHTML = newText
}

