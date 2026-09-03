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
const scoreBoard = document.querySelector(".scoreboard");
const playGame = Game.addEventListener("click", PlayGame);
const SelectRock = Rock.addEventListener("click", (event) => {
    playRound(event.currentTarget.id);
});
const SelectPaper = Paper.addEventListener("click", (event) => {
    playRound(event.currentTarget.id);
});
const SelectScissors = Scissors.addEventListener("click", (event) => {
    playRound(event.currentTarget.id);
});

let rounds = 0;
let playerScore = 0;
let computerScore = 0;

function computerChoice() {
    const options = ["rock", "paper", "scissors"];
    let option = Math.floor(Math.random() * 3);
    return options[option];
}

function PlayGame() {
    scoreBoard.textContent = "0 - 0";
    let numofrounds = Number(prompt("First to what?"));
    rounds = numofrounds;
    alert(`first to ${rounds} rounds wins!`);
}

function playRound(playerChoice) {
    const computerchoice = computerChoice();
    if (rounds == 0) {
        return;
    }
    if (playerChoice == "Rock") {
        if (computerchoice == "paper") {
            computerScore++
        }
        if (computerchoice == "scissors") {
            playerScore++
        }
    }
    else if (playerChoice == "Paper") {
        if (computerchoice == "scissors") {
            computerScore++
        }
        if (computerchoice == "rock") {
            playerScore++
        }
    }
    else if (playerChoice == "Scissors") {
        if (computerchoice == "rock") {
            computerScore++
        }
        if (computerchoice == "paper") {
            playerScore++
        }
    }
    scoreBoard.textContent = `${playerScore} - ${computerScore}`;
    if (playerScore == rounds) {
        alert(`You win!!! The final score was ${playerScore} - ${computerScore}!`);
        playerScore = 0;
        computerScore = 0;
    }
    else if (computerScore == rounds) {
        alert(`You lose! The final score was ${playerScore} - ${computerScore}!`);
        playerScore = 0;
        computerScore = 0;
    }
}




