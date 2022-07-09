let computerPlay = () => {
    let play = ["rock","paper","scissor"];
    return play[(Math.floor(Math.random() * play.length))];
}

let playRound = (computerSelection,playerSelection) => {
    if (playerSelection == "rock") {
        if (computerSelection == "scissor") {
            return "WIN";
        } else if (computerSelection == "paper"){
            return "LOSE";
        } else {
            return "DRAW"
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return "WIN";
        } else if (computerSelection == "scissor"){
            return "LOSE";
        } else {
            return "DRAW"
        }
    } else {
        if (computerSelection == "paper") {
            return "WIN";
        } else if (computerSelection == "rock"){
            return "LOSE";
        } else {
            return "DRAW"
        }
    }
}

let game = (playerSelection) => {
    let computerSelection = computerPlay(); 
    alert("You " + playerSelection + "\nComputer : " + computerSelection + "\n" + playRound(computerSelection,playerSelection));
}

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    game("rock");
})

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    game("paper");
})

const scissor = document.querySelector('#scissor');
scissor.addEventListener('click', () => {
    game("scissor");
})
