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
const hint = document.getElementById('hint');

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
            resultMessage.innerHTML = "Paper beats rock. You lose.";
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
            resultMessage.innerHTML = "Rock doesn't beat rock. Tie!";
            console.log("its a tie")
            break;
        case "pp":
            resultMessage.innerHTML = "Paper doesn't beat paper. Tie!";
            console.log("its a tie")
            break;
        case "ss":
            resultMessage.innerHTML = "Scissors doesn't beat scissors. Tie!";
            console.log("its a tie")
            break;
    }

    if (computerScore.value > 20 && userScore.value < 20 || computerScore.value > 10 && userScore.value < 10) {
       hint.innerHTML = `Yeah... seems like you could use some <a href="https://www.wikihow.com/Play-Rock,-Paper,-Scissors" target="_blank">help.</a>`
    }

    if (computerScore.value < 20 && userScore.value > 20 || computerScore.value < 10 && userScore.value > 10) {
        hint.innerHTML = `Yeah... you're killing it. Seems like the computer could use some <a href="https://www.wikihow.com/Play-Rock,-Paper,-Scissors" target="_blank">help.</a>`
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