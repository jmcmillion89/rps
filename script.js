const buttons = document.querySelectorAll('input')

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})

function getComputerChoice() {
    const hand = ['Rock', 'Paper', 'Scissors']
    return hand[(Math.floor(Math.random() * hand.length))];
}



function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
        return 'You Win! Rock beats Scissors.';
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
        return 'You Win! Scissors beats Paper.'
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
        return 'You Win! Paper beats Rock.'
    } else if (playerSelection === computerSelection) {
        return `It's a tie!`
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}.`
    }}
