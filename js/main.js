"use strict";

const MINE = "💣";

var gBoard = {
  minesAroundCount: 4,
  isShown: true,
  isMine: false,
  isMarked: true,
};

var gLevel = {
  SIZE: 4,
  MINES: 2,
};

var gGame = {
  isOn: false,
  shownCount: 0,
  markedCount: 0,
  secsPassed: 0,
};

function initGame() {
  gBoard = buildBoard();
  renderBoard();
}

function buildBoard() {
  var board = [];
  for (var i = 0; i < 4; i++) {
    board[i] = [];
    for (var j = 0; j < 4; j++) {
      var cell = (board[i][j] = { type: "", color: "#708090" });
      board[i][j] = cell;
    }
  }

  // board[getRandomInt(0, 3)][getRandomInt(0, 3)].type = MINE;
  // board[getRandomInt(0, 3)][getRandomInt(0, 3)].type = MINE;

  console.log("board :", board);
  return board;
}

function renderBoard(board) {
  var strHTML = ``;
  for (var i = 0; i < gBoard.length; i++) {
    strHTML += `<tr>\n`;
    for (var j = 0; j < gBoard.length; j++) {
      var currCell = gBoard[i][j];
      console.log("currCell :>> ", currCell);
      strHTML += `\t<td style="background: ${currCell.color}">${currCell.type}</td>\n`;
    }
    strHTML += `</tr>`;
  }

  var elTable = document.querySelector(".tbody");
  elTable.innerHTML = strHTML;
}

function createCell(i, j, value) {
  return {
    color: "#222",
    value: value,
    location: {
      i: i,
      j: j,
    },
  };
}

function setMinesNegsCount(board) {}

function cellClicked(elCell, i, j) {}

function cellMarked(elCell) {}
for (var i = 0; i < gBoard.length; i++) {
  var coord = gBoard[i];
  var elCell = document.querySelector(`#cell-${gBoard.i}-${gBoard.j}`);
  elCell.classList.add("mark");
}
function checkGameOver() {}

function expandShown(board, elCell, i, j) {}
