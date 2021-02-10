let compChoice = 'scissors'
let playerScore = 1;
let computerScore = 1;

function play(playerChoice) {
    let resultElem = document.getElementById('final-result')
    let playerWins = document.getElementById('user-score')
    let compWins = document.getElementById('comp-score')



    //lets start making logic to check against player choice and comp choice
    if (playerChoice == 'rock' && compChoice == 'rock') {
        resultElem.innerText = 'We have a tie!';
    } else if (playerChoice == 'rock' && compChoice == 'paper') {
        resultElem.innerText = 'Sorry, but you have lost.';
        compWins.innerText = (computerScore++).toString()
    } else if (playerChoice == 'rock' && compChoice == 'scissors') {
        resultElem.innerText = 'Yes, you have won!'
        playerWins.innerText = (playerScore++).toString()
    } else if (playerChoice == 'paper' && compChoice == 'paper') {
        resultElem.innerText = 'We have a tie!'
    } else if (playerChoice == 'paper' && compChoice == 'scissors') {
        resultElem.innerText = 'Sorry, but you have lost.'
        compWins.innerText = (computerScore++).toString()
    } else if (playerChoice == 'paper' && compChoice == 'rock') {
        resultElem.innerText = 'Yes, you have won!'
        playerWins.innerText = (playerScore++).toString()
    } else if (playerChoice == 'scissors' && compChoice == 'scissors') {
        resultElem.innerText = 'We have a tie!'
    } else if (playerChoice == 'scissors' && compChoice == 'paper') {
        resultElem.innerText = 'Yes, you have won!'
        playerWins.innerText = (playerScore++).toString()
    } else if (playerChoice == 'scissors' && compChoice == 'rock') {
        resultElem.innerText = 'Sorry, but you have lost.'
        compWins.innerText = (computerScore++).toString()
    }




    //we will later have randomnumbergen call choserandomchoice...
    choseRandomChoiceFromRandomNumber()
}














let choices = ['rock', 'scissors', 'paper']

function choseRandomChoiceFromRandomNumber() {
    let index = randomNumberGenerator()
    compChoice = choices[index]
}


function randomNumberGenerator() {
    return Math.floor(Math.random() * 3)
}

