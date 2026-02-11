function getComputerChoice() {
    const ans = Math.floor(Math.random() * 3);
    if(ans == 0) return "rock";
    else if(ans == 1) return "paper";
    else return "scissors";
}

// console.log(getComputerChoice());

// function getHumanChoice() {
//     const ans = prompt("Select rock, paper, or scissors");
//     return ans.toLowerCase();
// }

// console.log(getHumanChoice());

// function playGame() {
    
    // let round = 0;
    // const h = getHumanChoice();
    // const c = getComputerChoice();
    // playRound(h, c);
    // round++;

    // if(humanScore > computerScore) console.log("You win! The score is you: " + humanScore + " vs. " + computerScore + ".");
    // else if(computerScore > humanScore) console.log("You lose! The score is you: " + humanScore + " vs. " + computerScore + ".");
    // else console.log("Draw! The score is you: " + humanScore + " vs. " + computerScore + ".");
// }

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === "rock") {
        if(computerChoice === "paper") {
            computerScore++;
            document.querySelector("#commentary").textContent = "You lose! Paper beats rock.";
        }
        else if(computerChoice === "scissors") {
            humanScore++;
            document.querySelector("#commentary").textContent = "You win! Rock beats scissors.";
        }
        else {
            document.querySelector("#commentary").textContent = "Draw! Both are " + humanChoice + "."; 
        }
    }
    else if(humanChoice === "paper") {
        if(computerChoice === "scissors") {
            computerScore++;
            document.querySelector("#commentary").textContent ="You lose! Scissors beats paper.";
        }
        else if(computerChoice === "rock") {
            humanScore++;
            document.querySelector("#commentary").textContent ="You win! Paper beats rock.";
        }
        else {
            document.querySelector("#commentary").textContent ="Draw! Both are " + humanChoice + "."; 
        }
    }
    else {
        if(computerChoice === "rock") {
            computerScore++;
            document.querySelector("#commentary").textContent ="You lose! Rock beats scissors.";
        }
        else if(computerChoice === "paper") {
            humanScore++;
            document.querySelector("#commentary").textContent ="You win! Scissors beats paper.";
        }
        else {
            document.querySelector("#commentary").textContent ="Draw! Both are " + humanChoice + "."; 
        }
    }
    if(humanScore === 5) alert("You win!");
    else if(computerScore === 5) alert("You lose!");
}

const r = document.querySelector("#rock");
r.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    showScore();
})

const p = document.querySelector("#paper");
p.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    showScore();
})

const s = document.querySelector("#scissors");
s.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
    showScore();
})

function showScore() {
    document.querySelector("#human").textContent = "Your Score: " + humanScore;
    document.querySelector("#computer").textContent = "Computer Score: " + computerScore;
}

showScore();