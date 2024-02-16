function getComputerChoice() { 
    let randGen = Math.floor(Math.random() * 3);
    let choice = ""
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
            return 2;

        case (playerSelection === computerSelection):
            console.log(`You tie! ${playerSelection} beats ${computerSelection}`);
            return 1;   

        default:
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return 0;           
    }
}

let capitalize = (string) => 
string.replace(string.charAt(0), string.charAt(0).toUpperCase())

function playGame() {
    let roundResult, userScore, computerScore, playerChoice;
    userScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        playerChoice = prompt("Your choice").toLowerCase()
        playerChoice = capitalize(playerChoice)

        roundResult = playRound(playerChoice, getComputerChoice())

        switch (roundResult) {
            case 0:
                computerScore++;
                break;
            case 2:
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