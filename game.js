function getComputerChoice() {
    //return random: rock,paper, scissors.
    //1. randomly choose 1,2,3
    //2. return chosen value
    let computerChoice;
    const options = ['Rock', 'Paper', 'Scissors']
    computerChoice = Math.floor(Math.random()*3);
    return options[computerChoice];
}

function getPlayerChoice() {
    choice = prompt("Choose Rock, Paper, Scissors:")
    return choice;
    }
    


function rockPaperScissors(playerSelection, computerSelection) {
    let result; //define result
    
    if (playerSelection == "Rock" ) {
        if (computerSelection == "Rock") {
            result = "Tie"
            //if player rock, computer rock. tie
        } else if (computerSelection == "Paper") {
            result = "Lose"
            //if player rock computer paper. lose
        } else if (computerSelection == "Scissors") {
            result = "Win"
            //if player rock computer scissor. win
        }
    } else if (playerSelection == "Paper") {
        if (computerSelection == "Paper") {
            result = "Tie"
            //if player paper computer paper tie.
        } else if (computerSelection == "Scissors") {
            result = "Lose"
            //if player paper computer scissors lose.
        } else if (computerSelection == "Rock") {
            result = "Win"
            //if player paper computer rock win.
        }
    } else if (playerSelection == "Scissors") {
        if (computerSelection == "Scissors") {
            result = "Tie"
            textResult = `You ${result} ${playerSelection} ${computerSelection}`;
            //if player scissors computer scissors tie.
        } else if (computerSelection == "Rock") {
            result = "Lose"
            //if player scissors computer rock lose.
        } else if (computerSelection == "Paper") {
            result = "Win"
            //if player scissors computer paper win.
        }
    }

    
    return textResult;
    //string result: taken from if statement. You Win! Rock Beats Scissors. 
    //get player variable get computer variable print result from if statement.
}

console.log(rockPaperScissors(getPlayerChoice(), getComputerChoice()));