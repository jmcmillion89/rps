const computerSelection = getComputerChoice();
let playerSelection = prompt('Choose Rock, Paper, or Scissors').toLowerCase()

function getComputerChoice() {
    const hand = ['rock', 'paper', 'scissors']
    return hand[(Math.floor(Math.random() * hand.length))];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'You Win! Rock beats Scissors.'
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'You Win! Scissors beats Paper.'
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'You Win! Paper beats Rock.'
    } else if (playerSelection === computerSelection) {
        return `It's a tie!`
    } else {
        return `You Lose! ${computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)} beats ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}.`
    }
}




console.log(playRound(playerSelection, computerSelection));