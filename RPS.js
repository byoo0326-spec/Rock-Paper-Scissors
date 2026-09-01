//ROCK PAPER SCISSORS


//We will be making a game of rock paper scissors against a computer
//We will write psuedocode before we do anything:

//User selects a "PlayRound" button to play 10 rounds against a computer
//User chooses one of 3 buttons
//JS registers user click and uses a random value to select computer choice
//Scores update

const Game = document.querySelector("#Game");
const playGame = Game.addEventListener("click", PlayGame);

let playerScore = 0;
let computerScore = 0;

function playRound(computerchoice) {
    let choice = prompt("rock, paper, or scissors?")
    if (choice == "rock") {
        if (computerchoice == "paper") {
            computerScore++
        }
        if (computerchoice == "scissors") {
            playerScore++
        }
    }
    else if (choice == "paper") {
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
    let option = Math.floor(Math.random() * 2);
    return options[option];
}

function PlayGame() {
    let rounds = prompt("How many rounds would you like to play?")
    playerScore = 0;
    computerScore = 0;
    alert(`The score is 0 - 0!`)
    for (i = 0; i < rounds; i++) {
        playRound(computerChoice());
        alert(`Round ${i}: The score is ${playerScore} - ${computerScore}!`)
    }
    alert(`The final score was ${playerScore} - ${computerScore}!`)
}



