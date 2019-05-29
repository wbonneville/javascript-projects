const userScore = { value: 0 };
const computerScore = { value: 0 };
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.getElementById('.score-board');
const result_div = document.getElementById('.result');
const resultMessage = document.getElementById('resultMessage')
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
            resultMessage.innerHTML = "Rock beats scissors. You win.";
            userScore.value += 1;
            userScore_span.innerHTML = userScore.value;
            console.log("user wins")
        break;
        case "pr":
            resultMessage.innerHTML = "Paper beats rock. You win.";
            userScore.value += 1;
            userScore_span.innerHTML = userScore.value;
            console.log("user wins")
        break;
        case "sp":
            resultMessage.innerHTML = "Scissors beats paper. You win.";
            userScore.value += 1;
            userScore_span.innerHTML = userScore.value;
            console.log("user wins")
            break;

        case "sr":
            resultMessage.innerHTML = "Rock beats scissors. You lose.";
            computerScore.value += 1;
            computerScore_span.innerHTML = computerScore.value;
            console.log("computer wins")
            break;
        case "rp":
            resultMessage.innerHTML = "Paper beats rock. You lose";
            computerScore.value += 1;
            computerScore_span.innerHTML = computerScore.value;
            console.log("computer wins")
            break;
        case "ps":
            resultMessage.innerHTML = "Scissors beats paper. You lose.";
            computerScore.value += 1;
            computerScore_span.innerHTML = computerScore.value;
            console.log("computer wins")
            break;
        case "rr":
        case "pp":
        case "ss":
            resultMessage.innerHTML = "Tie!";
            console.log("its a tie")
            break;
    }
}



function main() {
    rock_div.addEventListener('click', function() {
    game('r')

    })

    paper_div.addEventListener('click', function() {
    game('p')
    
    })

    scissors_div.addEventListener('click', function() {
    game('s')
    
    })
}

main();