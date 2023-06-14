// As opções são rock paper e scissors

const options = ["rock", "paper", "scissors"];

// Esta função vai buscar uma das opções em cima a partir da options.lenght (0=rock, 1=paper e 2=scissors), vai multiplar por um número entre 0 e 1 e com esse resultado vamos obter, de forma aleatória, rock paper ou scissors com a ajudar do math.floor que basicamente arredonda para 0, 1 ou 2 em vez de ficar decimal

function getComputerChoice() {
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

// Esta função checka quem é o vencedor. Damos os parâmetros playerSelection e computerSelection e dizemos que caso o playerSelection seja igual a computerSelection então o resultado é tie, se playerSelection vencer computerSelection então o resultado é vitor e se o computerSelection vencer o playerSelection então é loss
// Atenção que aqui ainda não dissemos o que são o playerSelection e o computerSelection, ainda não lhes foi associado nada.

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

// Nesta função, com aquilo que fizemos anteriormente, vamos basicamente associar os resultados a algo que o utilizador possa realmente ver. Começamos por dar à variável result a função checkWinner e basicamente dizemos que caso essa variável seja igual a empate então o utilizador irá receber feedback a dizer que foi empate, caso seja vitória  então o utilizador recebe vitória e  acso seja derrota então o utilizador recebe derrota

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

// Nesta função vamos converter o texto em minúsculas de maneira a que o utilizador seja obrigado a usar "rock", "paper", "scissors". (ainda n percebo mt bem..)

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

// Nesta última função, é basicamente quando começamos o jogo. Dizemos que tanto o computador como o utilizador começam com o score a 0, iniciamos um for loop em que quando chegar a 5 o jogo acaba, damos finalmente valor ao computerSelection e ao playerSelection e dizemos que caso o playerselection ganhe então adiciona um ponto ao player e vice-versa. No final basicamente estamos a mostrar ao utilizador se perdeu, ganhou ou empatou.

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