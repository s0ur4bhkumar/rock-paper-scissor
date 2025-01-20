function getComputerChoice(){
    let randomInt = Math.floor(Math.random()*3 + 1);
    switch (randomInt) {
        case 1:
            return 'rock';
        case 2:
            return 'papper';
        case 3:
            return 'scissor';
    }
}

function getHumanChoice(){
    let choice = prompt('Enter your choice, "rock","papper" or "scissor": ');
    return choice.toLowerCase();
}

let humanScore = 0, computerScore = 0;
function playRound(ComputerChoice,HumanChoice){
    ComputerChoice = getComputerChoice();
    HumanChoice = getHumanChoice();
    // console.log(ComputerChoice);
    // console.log(humanScore);
    if ((HumanChoice == 'rock' & ComputerChoice == 'scissor')||(HumanChoice == 'papper' & ComputerChoice == 'rock')||
    (HumanChoice == 'scissor') & ComputerChoice == 'papper'){

        ++humanScore;
        // return alert('you won!');

    }
    else if ((ComputerChoice == 'rock' & HumanChoice == 'scissor')||(ComputerChoice == 'papper' & HumanChoice == 'rock')||
    (ComputerChoice == 'scissor') & HumanChoice == 'papper'){

        ++computerScore;
        // return alert('you lose!');

    }
}

function playGame(){
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    if (humanScore > computerScore){
        alert('you won!');
    }
    else if (humanScore == computerScore){
        alert("It's a draw");
    }
    else{
        alert("you lose!")
    }
}

playGame();


