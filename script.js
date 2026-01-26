const gameBoard = (function () {
  const Board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const full = () => {
    return Board.every((val) => val === "X" || val === "O");
  };
  return { Board, full };
})();

const Choice = (function () {
  let playerChoice;
  const computerChoice = function () {
    return Math.floor(Math.random() * 9);
  };
  return { playerChoice, computerChoice };
})();

const win = (function () {
  const winCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
  let selection = () => {
    let X = [];
    let O = [];
    for (let i = 0; i < gameBoard.Board.length; i++) {
      if (gameBoard.Board[i] == "X") {
        X.push(i + 1);
      } else if (gameBoard.Board[i] == "O") {
        O.push(i + 1);
      }
    }
    return { X, O };
  };
  const Check = (playerMoves) => {
    return winCombinations.some((combination) =>
      combination.every((cell) => playerMoves.includes(cell)),
    );
  };
  const result = function () {
    let player1 = selection().X;
    let player2 = selection().O;
    if (player1.length === 3 || player2.length === 3) {
      if (Check(player1)) {
        return `player1 wins`;
      } else if (Check(player2)) {
        return `player2 wins`;
      }
    }
    if (gameBoard.full()) {
      return `It's a draw`;
    }
  };

  return { result, selection };
})();

const boardMarker = (function () {
  const Mark = function (Indx, mark) {
    let markIndx = Indx - 1;
    if (
      markIndx > 8 ||
      markIndx < 0 ||
      gameBoard.Board[markIndx] === "X" ||
      gameBoard.Board[markIndx] === "O"
    ) {
      return "error";
    }
    gameBoard.Board[markIndx] = mark;
  };
  return { Mark };
})();

const playerSwitch = (() => {
  const Switch = function (player1) {
    return player1 === "X" ? "O" : "X";
  };
  return { Switch };
})();

(function game() {
  const resultArray = [`player1 wins`, `player2 wins`, `It's a draw`];
  let result;
  let currentPlayer = "X";
  while (!resultArray.includes(result)) {
    let player;
    if (currentPlayer === "X") {
      player = prompt("Player1, enter your cellno.: ");
    } else {
      player = prompt("player2, enter your cell no.: ");
    }
    if (boardMarker.Mark(player, currentPlayer) === "error") {
      // alert("cell already taken");
      console.log(currentPlayer);
      player = prompt("Cell already taken,try again");
    }
    if (player === "" || player === undefined) {
      alert("no value entered");
      break;
    }
    boardMarker.Mark(player, currentPlayer);
    result = win.result();
    console.log(result);
    console.log(gameBoard.Board);
    currentPlayer = playerSwitch.Switch(currentPlayer);
  }
  alert(result);
})();
