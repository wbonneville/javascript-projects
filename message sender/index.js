const inputMessage = document.getElementById('inputMessage')
const sendTheMessage = document.getElementById('sendTheMessage')
const innerText = document.getElementById('innerText').innerHTML;

sendTheMessage.addEventListener('click', sendMessage);

function sendMessage() {
    document.getElementById('innerText').innerHTML = inputMessage.value;
    console.log(inputMessage.value)
}
