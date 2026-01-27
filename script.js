// *******************************************gameBoard function*******************************

const gameBoard = (function () {
  const Board = ["", "", "", "", "", "", "", "", ""];
  const full = () => {
    return Board.every((val) => val === "X" || val === "O");
  };
  const reset = () => {
    for (let i = 0; i < Board.length; i++) {
      Board[i] = "";
    }
  };
  return { Board, full, reset };
})();

const Choice = (function () {
  let playerChoice;
  const computerChoice = function () {
    return Math.floor(Math.random() * 9);
  };
  return { playerChoice, computerChoice };
})();

// *********************************************************win function*******************************

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
      if (gameBoard.Board[i] == "X" || gameBoard.Board[i] === "x") {
        X.push(i + 1);
      } else if (gameBoard.Board[i] == "O" || gameBoard.Board[i] === "o") {
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

// **********************************************oard marker function*******************************

const boardMarker = (function () {
  const Mark = function (Indx, mark) {
    let markIndx = Indx - 1;
    if (
      markIndx > 8 ||
      markIndx < 0 ||
      gameBoard.Board[markIndx] !== "" ||
      gameBoard.Board[markIndx] !== ""
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

// ************************************************main game*************************************************

(function game() {
  const cells = document.querySelectorAll(".container > div");
  const dialog = document.querySelector("dialog");
  const restartBtn = document.querySelector(".restart");
  const cancelBtn = document.querySelector(".cancel");
  const resultArr = [`player1 wins`, `player2 wins`, `It's a draw`];
  let currentPlayer = "X";
  let result;
  let player;

  const handleClicks = (e) => {
    return e.target.id;
  };

  restartBtn.addEventListener("click", () => {
    gameBoard.reset();
    boardDisplayReset();
    currentPlayer = "X";
    dialog.close();
  });

  cancelBtn.addEventListener("click", () => {
    const container = document.querySelector(".container");
    const finalMessage = document.createElement("p");
    finalMessage.textContent = "Thank you for playing";
    container.innerHTML = "";
    container.append(finalMessage);
    container.style.display = 'flex';
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    dialog.close();
  });

  const boardDisplayReset = () => {
    cells.forEach((cell) => {
      cell.textContent = "";
    });
  };

  function start() {
    cells.forEach((cell) =>
      cell.addEventListener("click", (e) => {
        player = handleClicks(e);
        if (boardMarker.Mark(player, currentPlayer) === "error") {
          alert("try different cell");
        } else {
          boardMarker.Mark(player, currentPlayer);
          cell.textContent = `${currentPlayer}`;
          result = win.result();
          currentPlayer = playerSwitch.Switch(currentPlayer);
          if (resultArr.includes(result)) {
            const resultEle = dialog.querySelector("p");
            resultEle.textContent = `${result}`;
            dialog.showModal();
            return;
          }
        }
      }),
    );
  }
  start();
})();
