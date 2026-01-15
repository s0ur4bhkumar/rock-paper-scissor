// **********************************variables**********************************

let activePlayer;
let player1Selection;
let player2Selection;
let userScore = 0;
let computerScore = 0;

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

// function getUserChoice() {
//   return prompt("Enter your choice from ['rock','paper','scissor']:");
// }

//switch player function

// function switchPlayer() {} //for future

//function to play a single round

function playRound() {
  let userChoice = player1Selection;
  let computerChoice = getComputerChoice();
  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "rock")
  ) {
    console.log(`player: ${userChoice}, computer: ${computerChoice}`);
    return ++computerScore;
    // return `computer score:${computerScore}, human score:${userScore}`;
  } else if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissor") ||
    (computerChoice === "scissor" && userChoice === "rock")
  ) {
    console.log(`player: ${userChoice}, computer: ${computerChoice}`);
    return ++userScore;
    // return `computer score:${computerScore}, human score:${userScore}`;
  }
}

function playGame() {
  // userScore = 0;
  // computerScore = 0;
  playRound();

  if (userScore === 5) {
    scoreCard.textContent = "you win";
    scoreCard.style.justifyContent = "space-around";
    scoreCard.style.fontSize = "40px";
  } else if (computerScore === 5) {
    scoreCard.textContent = "you lose";
    scoreCard.style.justifyContent = "space-around";
    scoreCard.style.fontSize = "40px";
  }
  return;
}

// *****************************DOM manipulation*********************************

// DOM variables

const startButton = document.querySelector(".start");
const content = document.querySelector(".content");
const gameButtons = document.createElement("div");
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissor = document.createElement("button");
const scoreCard = document.createElement("div");
const user = document.createElement("p");
const computer = document.createElement("p");

//class names

gameButtons.classList.add("gameButtons");
rock.classList.add("rock");
paper.classList.add("paper");
scissor.classList.add("scissor");
scoreCard.classList.add("scoreCard");

//event listeners

startButton.addEventListener("click", (e) => {
  content.removeChild(e.target);
  content.appendChild(gameButtons);
  gameButtons.append(rock, paper, scissor);
  content.appendChild(scoreCard);
  scoreCard.append(user, computer);
});

gameButtons.addEventListener("click", (e) => {
  const choice = e.target;
  if (choice) {
    player1Selection = choice.className;
  }
  playGame();
  user.textContent = `computer score: ${computerScore}`;
  computer.textContent = `user score: ${userScore}`;
  user.style.border = "2px solid mediumpurple";
  user.style.borderRadius = "12px";
  user.style.padding = "12px";
  computer.style.border = "2px solid mediumpurple";
  computer.style.borderRadius = "12px";
  computer.style.padding = "12px";
});
