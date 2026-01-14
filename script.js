// **********************************variables**********************************

let activePlayer;
let player1;
let player2;
let userScore = 0;
let computerScore = 0;
const startButton = document.querySelector(".start");
const content = document.querySelector(".content");
const gameButtons = document.createElement("div");
gameButtons.classList.add("gameButtons");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissor = document.createElement("button");
const rockImage = document.createElement("img");
const paperImage = document.createElement("img");
const scissorImage = document.createElement("img");

// *********************************fucntions***********************************

//computer choice function

function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "paper";
  } else {
    return "scissor";
  }
}

//user choice function function

function getUserChoice() {
  return prompt("Enter your choice from ['rock','paper','scissor']:");
}

//switch player function

function switchPlayer() {}

//function to play a single round

function playRound(userChoice, computerChoice) {
  userChoice = getUserChoice();
  computerChoice = getComputerChoice();
  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "rock")
  ) {
    return ++computerScore;
    // return `computer score:${computerScore}, human score:${userScore}`;
  } else if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissor") ||
    (computerChoice === "scissor" && userChoice === "rock")
  ) {
    return ++userScore;
    // return `computer score:${computerScore}, human score:${userScore}`;
  }
}

// *****************************DOM manipulation*********************************
startButton.addEventListener("click", (e) => {
  content.removeChild(e.target);
});
