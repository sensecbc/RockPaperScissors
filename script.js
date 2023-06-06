const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "player";
    }
    else {
        return "computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "tie"){
        return "it's a tie"
    }

    else if(result == "player"){
        return `you've won because ${playerSelection} beats ${computerSelection}`
    }
    else {
        return `you've lost because ${computerSelection} beats ${playerSelection}`
    }
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if(options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }

}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("welcome!")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------");
        if (checkWinner(playerSelection, computerSelection) == "player"){
        scorePlayer++;
    } else if(checkWinner(playerSelection, computerSelection) == "computer"){
        scoreComputer++;
    }
    }
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner");
    }
    else if(scorePlayer < scoreComputer){
        console.log("Computer was the winner")
    }
    else {
        console.log("its a tie!")
    }
}

game();