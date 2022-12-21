let rock = document.querySelector('#rock');
let paper = document.querySelector('#paper');
let scissors = document.querySelector('#scissors');
let results = document.querySelector('#results');
let score = document.querySelector('#score');
results.textContent = 'Choose rock, paper or scissors:'
let playerScore = 0;
let computerScore = 0;

function updateScore () {
    score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

rock.addEventListener('click', () => {
    playRound(rock.getAttribute('id'), getComputerChoice());

});

paper.addEventListener('click', () => {
    playRound(paper.getAttribute('id'), getComputerChoice());

})

scissors.addEventListener('click', () => {
    playRound(scissors.getAttribute('id'), getComputerChoice());

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

function game() {
    //create variable to store computer and player scores
    //call playRound
    //check text result from play rounds to see if play won or lost
    //if player wins add 1 point to their score
    //if computer wins add 1 point to their score
    let playerScore = 0;
    let computerScore = 0;
    let textResult;
    for (let i = 0; i < 10; i++) {
        textResult = playRound(getPlayerChoice(), getComputerChoice())
        console.log(textResult);
        if (textResult.includes("Win")) {
            playerScore ++;
        } else if (textResult.includes("Lose")) {
            computerScore ++;
        } else if (textResult.includes("Tie")) {
            i--;
        }
        if (playerScore === 5 || computerScore === 5) {
            break;
        }
        //if text result contains win. add 1 to player score
        //else if text result contains lose add 1 to computer score
        //else if tied do not change score i--?
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }
    //if player scored higher win. if computer lose.
    if (playerScore > computerScore) {
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
        console.log("You win the match!");
    } else {
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
        console.log("You lose the match!")
    }
}

//if player score under 5 continue loop until it reaches 5 then they win
//if computer score under 5 continue loop until it reaches 5 and they win
//if either player or computer win break out of loop and announce results