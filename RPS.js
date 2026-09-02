//ROCK PAPER SCISSORS


//We will be making a game of rock paper scissors against a computer
//We will write psuedocode before we do anything:

//User selects a "PlayRound" button to play 10 rounds against a computer
//User chooses one of 3 buttons
//JS registers user click and uses a random value to select computer choice
//Scores update

const Game = document.querySelector("#Game");
const Rock = document.querySelector("#Rock");
const Paper = document.querySelector("#Paper");
const Scissors = document.querySelector("#Scissors");
const playGame = Game.addEventListener("click", PlayGame);
const SelectRock = Game.addEventListener("click", playRound);
const SelectPaper = Game.addEventListener("click", playRound);
const SelectScissors = Game.addEventListener("click", playRound);

let playerScore = 0;
let computerScore = 0;

function playRound(computerchoice) {
    if (button.id == "rock") {
        if (computerchoice == "paper") {
            computerScore++
        }
        if (computerchoice == "scissors") {
            playerScore++
        }
    }
    else if (button.id == "paper") {
        if (computerchoice == "scissors") {
            computerScore++
        }
        if (computerchoice == "rock") {
            playerScore++
        }
    }
    else {
        if (computerchoice == "rock") {
            computerScore++
        }
        if (computerchoice == "paper") {
            playerScore++
        }
    }
}

function computerChoice() {
    options = ["rock", "paper", "scissors"];
    let option = Math.floor(Math.random() * 3);
    return options[option];
}

function PlayGame() {
    let rounds = prompt("First to what?")
    playerScore = 0;
    computerScore = 0;
    alert(`first to ${rounds} wins!`);
    if (playerScore == rounds) {
        alert(`You win!!! The final score was ${playerScore} - ${computerScore}!`);
    }
    else if (computerScore == rounds) {
        alert(`You lose! The final score was ${playerScore} - ${computerScore}!`);
    }
}



