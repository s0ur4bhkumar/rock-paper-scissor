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

let selection = '';

function getHumanChoice(button){

    selection = button;
    return selection;
        
}

let humanScore = 0, computerScore = 0;
function playRound(ComputerChoice,HumanChoice){
    ComputerChoice = getComputerChoice();
    HumanChoice = selection;
    console.log(HumanChoice);

    if ((HumanChoice == 'rock' & ComputerChoice == 'scissor')||(HumanChoice == 'papper' & ComputerChoice == 'rock')||
    (HumanChoice == 'scissor') & ComputerChoice == 'papper'){

        alert('you win');
        ++humanScore;

    }
    else if ((ComputerChoice == 'rock' & HumanChoice == 'scissor')||(ComputerChoice == 'papper' & HumanChoice == 'rock')||
    (ComputerChoice == 'scissor') & HumanChoice == 'papper'){

        ++computerScore;

    }
}

// let play_box = document.querySelector('.play-box');





