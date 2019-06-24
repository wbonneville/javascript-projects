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
var finalStage = false;


function firstDoor() {
    text.innerText = "You clicked the first door. Guess the next door to keep going and escape door-hell.";
    firstDoorClicked = true;
    if (secondDoorClicked) {
        text.innerText = "WHOA. You might have just ended up leaving our known universe. I highly suggest you try a completely different door."
        document.body.style.backgroundColor = "red";
        firstDoorClicked = false;
        finalStage = true;
    }

}

function secondDoor() {
    if (firstDoorClicked) {
        text.innerText = "Getting closer! Guess the next door to continue out of door-hell!";
        secondDoorClicked = true;
    }
    if (finalStage) {
        text.innerText = "No!!! Anything but this door. Try at least once more!"
        document.body.style.backgroundColor = "darkred"
        secondDoorClicked = true;
        firstDoorClicked = true;
    }
}

function thirdDoor() {
    if (finalStage) {
        text.innerText = "Fortunately, you've made it out. Congrats!"
        document.body.style.backgroundColor = "white";
        window.location.href = "index2.html"
    }
}