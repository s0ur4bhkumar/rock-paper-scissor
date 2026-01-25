const gameBoard = (function () {
  const Board = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];
  return Board;
})();

const Marker = (function () {
  playerMarker = "X";
  computerMarker = "O";
  return { playerMarker, computerMarker };
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
  const Check = (ele) => {
    return winCombinations.some((arr) => {
      if (ele.length !== arr.length) {
        return false;
      }
      return arr.every((value, index) => value === ele[index]);
    });
  };
  const result = function (player1, player2) {
    if (Check(player1)) {
      return `${player1} wins`;
    } else if (Check(player2)) {
      return `${player2} wins`;
    } else {
      return `It's a draw`;
    }
  };

  return { result };
})();


