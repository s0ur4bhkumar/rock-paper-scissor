let arr = ["rock", "paper", "scissor"];

let computerChoice = () => arr[Math.floor(Math.random() * 3)];

function game() {
  let userChoice = prompt("Enter your choice from ['rock','paper','scissor']:");
  choice = computerChoice();
  let userScore = 0;
  let computerScore = 0;
  if (
    (userChoice === "rock" && choice === "paper") ||
    (userChoice === "paper" && choice === "scissor") ||
    (userChoice === "scissor" && choice === "rock")
  ) {
    return "you lose";
  } else if (
    (choice === "rock" && userChoice === "paper") ||
    (choice === "paper" && userChoice === "scissor") ||
    (choice === "scissor" && userChoice === "rock")
  ) {
    return "you win";
  } else {
    return "It's a draw";
  }
}
