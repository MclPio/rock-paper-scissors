let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let results = document.querySelector('#results');
let ending = document.querySelector('#ending');
let playerScore = 0;
let computerScore = 0;
let resetButton = document.createElement('button');
results.textContent = 'Choose rock, paper or scissors:'
resetButton.textContent = 'RESTART';
document.body.appendChild(resetButton);
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
});

function updateScore () {
    ending.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            ending.textContent = `Player: ${playerScore} Computer: ${computerScore} You win the match!`;
            
        } else {
            ending.textContent = `Player: ${playerScore} Computer: ${computerScore} You lose the match!`; 
    }
}
}

rock.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
    } else {
        playRound(rock.getAttribute('id'), getComputerChoice());
    }
});

paper.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
    } else {
        playRound(paper.getAttribute('id'), getComputerChoice());
    }
})

scissors.addEventListener('click', () => {
    if (playerScore == 5 || computerScore == 5) {
    } else {
    playRound(scissors.getAttribute('id'), getComputerChoice());
    }
});

function getComputerChoice() {
    let computerChoice;
    const options = ['rock', 'paper', 'scissors'];
    computerChoice = Math.floor(Math.random()*3); //random number 0,1,2
    return options[computerChoice]; //random choice rock paper scissors
}
    
function playRound(playerSelection, computerSelection) {
    let result; //define result
    
    if (playerSelection == "rock" ) {
        if (computerSelection == "rock") {
            result = "Tie";
            textResult = `You ${result}! ${playerSelection} = ${computerSelection}`;
            //if player rock, computer rock. tie
        } else if (computerSelection == "paper") {
            result = "Lose";
            textResult = `You ${result}! ${computerSelection} beats ${playerSelection}`;
            computerScore += 1;
            //if player rock computer paper. lose
        } else if (computerSelection == "scissors") {
            result = "Win";
            textResult = `You ${result}! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
            //if player rock computer scissor. win
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "paper") {
            result = "Tie";
            textResult = `You ${result}! ${playerSelection} = ${computerSelection}`;
            //if player paper computer paper tie.
        } else if (computerSelection == "scissors") {
            result = "Lose";
            textResult = `You ${result}! ${computerSelection} beats ${playerSelection}`;
            computerScore += 1;
            //if player paper computer scissors lose.
        } else if (computerSelection == "rock") {
            result = "Win";
            textResult = `You ${result}! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
            //if player paper computer rock win.
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "scissors") {
            result = "Tie";
            textResult = `You ${result}! ${playerSelection} = ${computerSelection}`;
            //if player scissors computer scissors tie.
        } else if (computerSelection == "rock") {
            result = "Lose";
            textResult = `You ${result}! ${computerSelection} beats ${playerSelection}`;
            computerScore += 1;
            //if player scissors computer rock lose.
        } else if (computerSelection == "paper") {
            result = "Win";
            textResult = `You ${result}! ${playerSelection} beats ${computerSelection}`;
            playerScore += 1;
            //if player scissors computer paper win.
        }
    }
    updateScore ()
    results.textContent= textResult;
    return textResult;
    //string result: taken from if statement. You Win! rock Beats scissors. 
    //get player variable get computer variable print result from if statement.
}

//if player score under 5 continue loop until it reaches 5 then they win
//if computer score under 5 continue loop until it reaches 5 and they win
//if either player or computer win break out of loop and announce results