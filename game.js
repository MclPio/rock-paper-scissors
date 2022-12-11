function getComputerChoice() {
    let computerChoice;
    const options = ['Rock', 'Paper', 'Scissors'];
    computerChoice = Math.floor(Math.random()*3); //random number 0,1,2
    return options[computerChoice]; //random choice rock paper scissors
}

function getPlayerChoice() {
    while (true) {
        var choice = prompt("Choose Rock, Paper, Scissors:"); //prompt player to type
        firstLetter = (choice.slice(0,1)).toUpperCase(); //always uppercase first letter
        otherLetters = (choice.slice(1)).toLowerCase(); //always lowercase rest of letters
        cleanChoice = firstLetter + otherLetters; //return clean choice to pass on to game
        if (cleanChoice === "Rock" || cleanChoice === "Paper" || cleanChoice === "Scissors") {
            break;
        } else {
            console.log("Please enter either: Rock, Paper, or Scissors");
        }
    }
    return cleanChoice;
}
    
function playRound(playerSelection, computerSelection) {
    let result; //define result
    
    if (playerSelection == "Rock" ) {
        if (computerSelection == "Rock") {
            result = "Tie";
            textResult = `You ${result}! ${playerSelection} = ${computerSelection}`;
            //if player rock, computer rock. tie
        } else if (computerSelection == "Paper") {
            result = "Lose";
            textResult = `You ${result}! ${computerSelection} beats ${playerSelection}`;
            //if player rock computer paper. lose
        } else if (computerSelection == "Scissors") {
            result = "Win";
            textResult = `You ${result}! ${playerSelection} beats ${computerSelection}`;
            //if player rock computer scissor. win
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Paper") {
            result = "Tie";
            textResult = `You ${result}! ${playerSelection} = ${computerSelection}`;
            //if player paper computer paper tie.
        } else if (computerSelection == "Scissors") {
            result = "Lose";
            textResult = `You ${result}! ${computerSelection} beats ${playerSelection}`;
            //if player paper computer scissors lose.
        } else if (computerSelection == "Rock") {
            result = "Win";
            textResult = `You ${result}! ${playerSelection} beats ${computerSelection}`;
            //if player paper computer rock win.
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Scissors") {
            result = "Tie";
            textResult = `You ${result}! ${playerSelection} = ${computerSelection}`;
            //if player scissors computer scissors tie.
        } else if (computerSelection == "Rock") {
            result = "Lose";
            textResult = `You ${result}! ${computerSelection} beats ${playerSelection}`;
            //if player scissors computer rock lose.
        } else if (computerSelection == "Paper") {
            result = "Win";
            textResult = `You ${result}! ${playerSelection} beats ${computerSelection}`;
            //if player scissors computer paper win.
        }
    }

    
    return textResult;
    //string result: taken from if statement. You Win! Rock Beats Scissors. 
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
    for (let i = 0; i < 5; i++) {
        textResult = playRound(getPlayerChoice(), getComputerChoice())
        console.log(textResult);
        if (textResult.includes("Win")) {
            playerScore ++;
        } else if (textResult.includes("Lose")) {
            computerScore ++;
        } else if (textResult.includes("Tie")) {
            i--;
        }
        //if text result contains win. add 1 to player score
        //else if text result contains lose add 1 to computer score
        //else if tied do not change score i--?
        console.log(`Player Score: ${playerScore} | Computer Score: ${computerScore}`);
    }
    //if player scored higher win. if computer lose.
    if (playerScore > computerScore) {
        console.log("You win the match!");
    } else {
        console.log("You lose the match!")
    }
}

game();