let computerPlay = () => {
    let play = ["rock","paper","scissor"];
    return play[(Math.floor(Math.random() * play.length))];
}

let playRound = (computerSelection,playerSelection) => {
    const eachResult = document.querySelector(".eachResult");
    const construct = document.querySelector(".construct");
    const playerScore = document.querySelector("#player-score");
    const compScore = document.querySelector("#comp-score");

    const tryAgain = () => {
        const tryAgainButton = document.createElement("button");
        tryAgainButton.classList.add("tryAgain");
        tryAgainButton.innerText = "Try Again!";
        construct.appendChild(tryAgainButton);
        
        const tryAgain = document.querySelector('.tryAgain');
        tryAgain.addEventListener('click', () => {
        location.reload();
        })
    }

    const win = () => {
        playerScore.innerText = parseInt(playerScore.innerText) + 1;
        eachResult.innerText = `${playerSelection} won against ${computerSelection}`
        if (playerScore.innerText == 5) {
            const playerWon = document.createElement("h1");
            playerWon.classList.add("playerWon");
            playerWon.innerText = "Congratulation, YOU WON!!!"
            construct.appendChild(playerWon);
            tryAgain();
        }
    }

    const lose = () => {
        compScore.innerText = parseInt(compScore.innerText) + 1;
        eachResult.innerText = `${playerSelection} beaten by ${computerSelection}`;
        if (compScore.innerText == 5) {
            const compWon = document.createElement("h1");
            compWon.classList.add("compWon");
            compWon.innerText = "YOU LOSE!!"
            construct.appendChild(compWon);
            tryAgain();
        }
    }

    const draw = () => {
        eachResult.innerText = playerSelection + " draw with " + computerSelection;
    }

    if (playerSelection == "rock") {
        if (computerSelection == "scissor") {
            return win();
        } else if (computerSelection == "paper"){
            return lose();
        } else {
            return draw();
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            return win();
        } else if (computerSelection == "scissor"){
            return lose();
        } else {
            return draw();
        }
    } else {
        if (computerSelection == "paper") {
            return win();
        } else if (computerSelection == "rock"){
            return lose();
        } else {
            return draw();
        }
    }
}

let game = (playerSelection) => {
    let computerSelection = computerPlay(); 
    playRound(computerSelection,playerSelection);
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