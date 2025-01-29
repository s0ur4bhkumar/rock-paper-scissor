function welcome(){
    alert('welcome');
}

// welcome()

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
    
    if ((HumanChoice == 'rock' && ComputerChoice == 'scissor')||(HumanChoice == 'papper' && ComputerChoice == 'rock')||
    (HumanChoice == 'scissor') && ComputerChoice == 'papper'){
        
        ++humanScore;
        
    }
    if ((ComputerChoice == 'rock' && HumanChoice == 'scissor')||(ComputerChoice == 'papper' && HumanChoice == 'rock')||
    (ComputerChoice == 'scissor') && HumanChoice == 'papper'){

        ++computerScore;

        
    }
    
    return ComputerChoice;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = `Human Score: ${humanScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
    userSelectionImg.src = '';
    computerSelectionImg.src = '';
}

function playGame(){

    let buttons = document.querySelectorAll('button')

    buttons.forEach(button => {

        button.addEventListener('click', () => {

            let compChoice = playRound();

            console.log(`user choice: ${button.id}`);
            console.log(`computer choice: ${compChoice}`);
            console.log(`user score: ${humanScore}`);
            console.log(`computer score: ${computerScore}`);

            userSelectionImg.src = `images/${(button.id)}.png`
            computerSelectionImg.src = `images/${compChoice}.png`

            userScoreDisplay.textContent = `Human Score: ${humanScore}`;
            computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
   
            if (humanScore == 5){
                alert('you won!, refresh the page or click on your next choice to continue playing');
                resetGame();
                return;
            }
            else if (computerScore == 5){
                alert('you lose, refresh the page or click on your next choice to continue playing');
                resetGame();
                return;
            }
            
            
        });
        
    });

    let active = document.querySelector('.active')
    let div = document.createElement('div');
    div.classList.add('round-logs');
    let userSelectionImg = document.createElement('img');
    let computerSelectionImg = document.createElement('img');
    let userSelection = document.createElement('div');
    let computerSelection = document.createElement('div');
    userSelection.classList.add('user');
    computerSelection.classList.add('computer')

    const userScoreDisplay = document.createElement('div');
    const computerScoreDisplay = document.createElement('div');

    active.appendChild(div);
    div.appendChild(userSelection);
    div.appendChild(computerSelection);
    userSelection.appendChild(userSelectionImg);
    userSelection.appendChild(userScoreDisplay);
    computerSelection.appendChild(computerSelectionImg);
    computerSelection.appendChild(computerScoreDisplay);

    // return;

}





