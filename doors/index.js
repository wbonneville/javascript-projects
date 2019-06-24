const text = document.getElementById("text")
const door1 = document.getElementById("door1")
door1.addEventListener("click", firstDoor)
const door2 = document.getElementById("door2")
door2.addEventListener("click", secondDoor)
const door3 = document.getElementById("door3")
door3.addEventListener("click", thirdDoor)
var firstDoorClicked = false;
var secondDoorClicked = false;
var thirdDoorClicked = false;


function firstDoor() {
    text.innerText = "You clicked the first door. Guess the next door to keep going and escape door-hell.";
    firstDoorClicked = true;
}

function secondDoor() {
    if (firstDoorClicked) {
        text.innerText = "Getting closer! Guess the next door to continue out of door-hell!";
        secondDoorClicked = true;
    }

}