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

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let selectionCondition = false;
    let playerSelection;
    for (let i = 0; i < 5; i++){
        computerSelection = computerPlay();
        while (selectionCondition == false) {
            let selection = prompt("Input your choose (rock/paper/scissor)?");
            playerSelection = selection.toLowerCase();
            if (playerSelection == "rock" || playerSelection == "paper" || playerSelection == "scissor"){
                selectionCondition = true;
            }
        }
        
        if (playRound(computerSelection,playerSelection)){
            playerScore += 1;
        } else {
            computerScore += 1;
        }

        selectionCondition = false;
    }
    if (playerScore > computerScore){
        console.log( "You WIN");
    } else {
        console.log("You LOSE");;
    }
}

game();