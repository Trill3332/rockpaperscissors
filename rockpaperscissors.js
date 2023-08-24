function getComputerChoice() {
    computerChoice = Math.random();
    if (computerChoice >= 0 && computerChoice < 1/3) {
        computerChoice = 'rock';
    }
    else if (computerChoice >= 1/3 && computerChoice < 2/3) {
        computerChoice = 'paper';
    }
    else if (computerChoice >= 2/3 && computerChoice < 1) {
        computerChoice = 'scissors';
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();

    let result = '';

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            result = 'Tie';
        }
        else if (computerSelection === 'paper') {
            result = 'Lose';
        }
        else if (computerSelection === 'scissors') {
            result = 'Win';
        }
    }
    else  if (playerSelection === 'paper') {
        if (computerSelection === 'rock') {
            result = 'Win';
        }
        else if (computerSelection === 'paper') {
            result = 'Tie';
        }
        else if (computerSelection === 'scissors') {
            result = 'Lose'
        }
    }
    else if (playerSelection === 'scissors') {
        if(computerSelection === 'rock') {
            result = 'Lose';
        }
        else if (computerSelection === 'paper') {
            result = 'Win';
        }
        else if (computerSelection === 'scissors') {
            result = 'Tie';
        }
    }
    alert(`You selected ${playerSelection}.Computer selected ${computerSelection}.${result}`);
}




