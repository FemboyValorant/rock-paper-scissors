function getComputerChoice() { 
    let randGen = Math.floor(Math.random() * 3);
    let choice;
    switch (randGen) {
        case 0: choice = "Rock"; break;
        case 1: choice = "Paper"; break;
        case 2: choice = "Scissors"; break;}
    return choice;
}

function playRound(playerSelection, computerSelection) {
    switch (true){
        case (playerSelection === "Rock" && computerSelection === "Scissors"):
        case (playerSelection === "Paper" && computerSelection === "Rock"):
        case (playerSelection === "Scissors" && computerSelection === "Paper"):
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return WIN;

        case (playerSelection === computerSelection):
            console.log(`You tie! ${playerSelection} ties with ${computerSelection}`);
            return TIE;   

        default:
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return LOSS;           
    }
}

const LOSS = 0;
const TIE = 1;
const WIN = 2;

let roundResult, userScore, computerScore, playerChoice;
userScore = 0;
computerScore = 0;
const choiceSelect = document.querySelectorAll('button.choiceButtons');
const resultDisplay = document.querySelector('#results');
const winDisplay = document.querySelector('#winner');
let winFlag = false;

choiceSelect.forEach(buttonChoice => buttonChoice.addEventListener('click', () => {
    if (winFlag === false){
        playerChoice = buttonChoice.textContent;
    
        roundResult = playRound(playerChoice, getComputerChoice())
    
        switch (roundResult) {
            case LOSS:
                computerScore++;
                break;
            case WIN:
                userScore++;
                break;
        }
    
        resultDisplay.textContent = `Current score is ${userScore}-${computerScore}`;    
    }

    switch(true){
        case userScore>=5:
            winDisplay.textContent = "You have won the game!";
            winFlag = true;
            break;
        case computerScore>=5:
            winDisplay.textContent = "The computer has won the game!";
            winFlag = true;
            break;
        default:
            break;
    }
}))





