function getComputerChoice() {
    const ans = Math.floor(Math.random() * 3);
    if(ans == 0) return "rock";
    else if(ans == 1) return "paper";
    else return "scissors";
}

// console.log(getComputerChoice());

function getHumanChoice() {
    const ans = prompt("Select rock, paper, or scissors");
    return ans.toLowerCase();
}

// console.log(getHumanChoice());

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let round = 0;

    function playRound(humanChoice, computerChoice) {
        if(humanChoice === "rock") {
            if(computerChoice === "paper") {
                computerScore++;
                console.log("You lose! Paper beats rock.");
            }
            else if(computerChoice === "scissors") {
                humanScore++;
                console.log("You win! Rock beats scissors.");
            }
            else {
                console.log("Draw! Both are " + humanChoice + "."); 
            }
        }
        else if(humanChoice === "paper") {
            if(computerChoice === "scissors") {
                computerScore++;
                console.log("You lose! Scissors beats paper.");
            }
            else if(computerChoice === "rock") {
                humanScore++;
                console.log("You win! Paper beats rock.");
            }
            else {
                console.log("Draw! Both are " + humanChoice + "."); 
            }
        }
        else {
            if(computerChoice === "rock") {
                computerScore++;
                console.log("You lose! Rock beats scissors.");
            }
            else if(computerChoice === "paper") {
                humanScore++;
                console.log("You win! Scissors beats paper.");
            }
            else {
                console.log("Draw! Both are " + humanChoice + "."); 
            }
        }
    }

    while(round < 5) {
        const h = getHumanChoice();
        const c = getComputerChoice();
        playRound(h, c);
        round++;
    }

    if(humanScore > computerScore) console.log("You win! The score is you: " + humanScore + " vs. " + computerScore + ".");
    else if(computerScore > humanScore) console.log("You lose! The score is you: " + humanScore + " vs. " + computerScore + ".");
    else console.log("Draw! The score is you: " + humanScore + " vs. " + computerScore + ".");
}

playGame()