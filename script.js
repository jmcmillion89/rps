const buttons = document.querySelectorAll('input')

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.addEventListener('click', function(){
        document.querySelector('.results').innerHTML = playRound(button.value)
        document.querySelector('.score').innerHTML = `<h3>Your Score: ${playerScore}. Computer Score: ${computerScore}.</h3>`
    })
})

function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}
function getComputerChoice() {
    const hand = ['Rock', 'Paper', 'Scissors']
    return hand[(Math.floor(Math.random() * hand.length))];
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = '';
    
    
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')) {
        playerScore++;     
        result = (playerSelection + ' beats ' + computerSelection + '.');
    } else if (playerSelection === computerSelection) {
        result += `It's a tie!`
    } else {
        computerScore++;
        result = `${computerSelection} beats ${playerSelection}.`
    }

    if (playerScore === 5) {
        result = '<br> <h1>You win the game!</h1>'
        disableButtons()
    }
    
    if (computerScore === 5) {
        result = '<br> <h1>The computer wins the game!</h1>'
        disableButtons()
    }

    return result

}
