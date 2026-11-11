let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)];
    return randomChoice;
}

function getHumanChoice(){
    let humanChoice = prompt('Rock/ Paper / Scissor: ').toLowerCase();
    return humanChoice;
}
function playRound(human, computer){
    if (human === 'rock'){
        if(computer === 'paper'){
            console.log('Computer wins');
            computerScore +=1;
        }
        else {
            console.log('You win');
            humanScore +=1;
        }
    }
    else if (human === 'paper'){
        if(computer === 'scissor'){
            console.log('Computer wins');
            computerScore +=1;
        }
        else {
            console.log('You win');
            humanScore +=1;
        }
    }
    else if (human === 'scissor'){
        if(computer === 'rock'){
            console.log('Computer wins');
            computerScore +=1;
        }
        else {
            console.log('You win');
            humanScore +=1;
        }
    }
    else {
        console.log('Tie');
    }
}

function playGame(){
    let i = 5
    while(i>0){
        let hChoice = getHumanChoice();
        let CChoice = getComputerChoice();
        playRound(hChoice, CChoice);
        i -=1;
    }
    if (humanScore > computerScore){
        console.log('You win\n Human: ',humanScore,'Computer:',computerScore)
    }
    else {
        console.log('You Lost\n Human: ',humanScore,'Computer:',computerScore)
    }
}

document.getElementById('playBtn').addEventListener('click',playGame);
