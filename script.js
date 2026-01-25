const gameBoard = (function () {
  const Board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return Board;
})();

const Marker = (function () {
  let X = "X";
  let O = "O";
  return { X, O };
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
    } else if (gameBoard.every((value) => value === "X" && value === "O")) {
      return `It's a draw`;
    } else {
      return "hell";
    }
  };

  return { result };
})();

const boardMarker = (function () {
  const Mark = function (player1Mark, player2Mark) {
    if (
      (gameBoard[player1Mark] || gameBoard[player2Mark]) === ("X" || "O") ||
      (player1Mark || player2Mark) > 8
    ) {
      return 'error';
    }
    gameBoard[player1Mark] = Marker.X;
    gameBoard[player2Mark] = Marker.O;
  };
  return { Mark };
})();

const getSelection = (function () {
  let selection = () => {
    let X = [];
    let O = [];
    for (let i = 0; i < gameBoard.length; i++) {
      if (gameBoard[i] == "X") {
        X.push(i + 1);
      } else if (gameBoard[i] == "O") {
        O.push(i + 1);
      }
    }
    return [X, O];
  };
  return { selection };
})();

(function Main() {
  let resultArr = [`player1 wins`, `player2 wins`, `It's a draw`];
  let result;
  while (!resultArr.includes(result)) {
    const player1 = prompt("player1 choice: ");
    if (player1 === null || player1 === "") {
      break;
    }
    const player2 = prompt("player2 choice: ");
    boardMarker.Mark(parseInt(player1), parseInt(player2));
    
    if (boardMarker.Mark(parseInt(player1), parseInt(player2)) === 'error') {
      alert('nope')
    }
    
    const [a, b] = getSelection.selection();

    if (a.length === 3 || b.length === 3) {
      result = win.result(a, b);
    } else if (!resultArr.includes(result)){
      continue;
    }
    console.log(result);
    console.log(gameBoard);
  }
})();
