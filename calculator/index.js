function calc() {
    var a = parseInt(document.getElementById("value1").value);
    var b = parseInt(document.getElementById("value2").value);
    var op = document.getElementById("operator").value;
    var calculate;

if (op == "add") {
    calculate = a + b
} else if (op == "min") {
    calculate = a - b
} else if (op == "mul") {
    calculate = a * b 
} else if (op == "div") {
    calculate = a / b
}

document.querySelector("#result").innerHTML = calculate;

}




