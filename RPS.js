//ROCK PAPER SCISSORS


//We will be making a game of rock paper scissors against a computer
//We will write psuedocode before we do anything:

//User selects a "PlayRound" button to play 10 rounds against a computer
//User chooses one of 3 buttons
//JS registers user click and uses a random value to select computer choice
//Scores update

const Game = document.querySelector("#Game");
const playGame = Game.addEventListener("click", PlayGame);

playerScore;
computerScore;

function playRound() {
    let computerchoice = computerChoice();
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

    function computerChoice() {
        options = ["rock", "paper", "scissors"];
        let option = 2 * Math.random;
        return options[option];
    }

    function PlayGame() {
        let rounds = prompt("How many rounds would you like to play?")
        playerScore = 0;
        computerScore = 0;
        for (i = 0; i < rounds; i++) {
            playRound();
        }
    }



