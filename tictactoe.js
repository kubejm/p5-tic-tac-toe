var canvasWidth = '600';
var canvasHeight = '600';
var cellWidth = Math.round(canvasWidth / 3);
var cellHeight = Math.round(canvasHeight / 3);

var board = [['', '', ''],['', '', ''],['','','']];
var turns = 0;

// p5 lifecycle function
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  textAlign(CENTER, CENTER);
  textSize(cellWidth);
}

// p5 lifecycle function
function draw() {
  background('white');
  drawGrid();
  hoverHandler();
  drawBoard();
}

// draws the tic-tac-toe grid
function drawGrid() {
  // Vertical lines
  line(cellWidth, 0, cellWidth, canvasHeight);
  line(cellWidth * 2, 0, cellWidth * 2, canvasHeight);

  // Horizontal lines
  line(0, cellHeight, canvasWidth, cellHeight);
  line(0, cellHeight * 2, canvasWidth * 2, cellHeight * 2);
}

// populates the board with x's and o's
function drawBoard() {
  board.forEach(function (row, r) {
    row.forEach(function (cell, c) {
      if (cell) {
        var x = ((c + 1) * cellWidth) - (cellWidth / 2);
        var y = ((r + 1) * cellHeight) - (cellHeight / 2);

        text(cell, x, y);
      }
    });
  });
}

// p5 lifecycle function
// handles setting x or o to a cell
function mouseClicked() {
  var column = getMouseColumn() - 1;
  var row = getMouseRow() - 1;

  if (!board[row][column]) {
    var char = turns % 2 ? 'O' : 'X';
    board[row][column] = char;
    turns++;
  }
}

// draws a circle in the cell the user hovers over
function hoverHandler() {
  var column = getMouseColumn();
  var row = getMouseRow();

  if (mouseX > 0 && mouseY > 0 
    && mouseX < canvasWidth && mouseY < canvasHeight) {
    var x = (column * cellWidth) - (cellWidth / 2);
    var y = (row * cellHeight) - (cellHeight / 2);
    ellipse(x, y, cellWidth, cellHeight);
  }
}

// retrieves the column the mouse is within
function getMouseColumn() {
  return Math.floor(mouseX / cellWidth) + 1;  
}

// retrieves the row the mouse is within
function getMouseRow() {
  return Math.floor(mouseY / cellHeight) + 1;
}
