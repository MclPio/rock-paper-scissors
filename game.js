function getComputerChoice() {
    //return random: rock,paper, scissors.
    //1. randomly choose 1,2,3
    //2. return chosen value
    let computerChoice;
    const options = ['Rock', 'Paper', 'Scissors']
    computerChoice = Math.floor(Math.random()*3);
    return options[computerChoice];
}

