//initial score

let userScore = 0;
let computerScore = 0;

//computer choice function
//
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

//function to play a single round
function playRound(userChoice, computerChoice) {
  userChoice = getUserChoice();
  computerChoice = getComputerChoice();
  if (
    (userChoice === "rock" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "scissor") ||
    (userChoice === "scissor" && computerChoice === "rock")
  ) {
    // console.log(`you lost!, ${computerChoice} beats ${userChoice}`);
    ++computerScore;
    return `computer score:${computerScore}, human score:${userScore}`;
  } else if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissor") ||
    (computerChoice === "scissor" && userChoice === "rock")
  ) {
    // console.log(`you won!, ${userChoice} beats ${computerChoice}`);
    ++userScore;
    return `computer score:${computerScore}, human score:${userScore}`;
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(
      `round ${i} => computer score:${computerScore}, human score:${userScore}`,
    );
  }
  if (userScore > computerScore) {
    console.log(`computer score: ${computerScore}, your score:${userScore}`);
    return "you win";
  } else if (userScore < computerScore) {
    console.log(`computer score: ${computerScore}, your score:${userScore}`);
    return "you lose";
  } else {
    console.log(`computer score: ${computerScore}, your score:${userScore}`);
    return "it's a draw";
  }
}
