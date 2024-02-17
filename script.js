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

let capitalize = (string) => 
string.replace(string.charAt(0), string.charAt(0).toUpperCase())

const LOSS = 0;
const TIE = 1;
const WIN = 2;

function playGame() {
    let roundResult, userScore, computerScore, playerChoice;
    userScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Your choice").toLowerCase()
        playerChoice = capitalize(playerChoice)

        roundResult = playRound(playerChoice, getComputerChoice())

        switch (roundResult) {
            case LOSS:
                computerScore++;
                break;
            case WIN:
                userScore++;
                break;
        }

        console.log(`Current score is ${userScore}-${computerScore}`)
    }

    switch(true){
        case userScore>computerScore:
            console.log("You have won the game!")
            break;
        case userScore===computerScore:
            console.log("You both tied the game!")
            break;
        case userScore<computerScore:
            console.log("The computer has won the game!")
            break;
    }
}

playGame();