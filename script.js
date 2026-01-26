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
  const Check = (ele = null) => {
    if (ele === null) {
      return false;
    }
    return winCombinations.some((arr) => {
      if (ele.length !== arr.length) {
        return false;
      }
      return arr.every((value, index) => value === ele[index]);
    });
  };
  const result = function (player1, player2) {
    if (Check(player1)) {
      return `player1 wins`;
    } else if (Check(player2)) {
      return `player2 wins`;
    } else {
      if (boardFull) {
        return `It's a draw`;
      }
    }
  };

  return { result };
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
      console.log("error");
      return
    }
    gameBoard.Board[markIndx] = mark;
  };
  return { Mark };
})();

const getSelection = (function () {
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
    return [X, O];
  };
  return { selection };
})();

``

(function Main() {
  let resultArr = [`player1 wins`, `player2 wins`, `It's a draw`];
  let result;
  while (!resultArr.includes(result)) {
    const player
  }
});
