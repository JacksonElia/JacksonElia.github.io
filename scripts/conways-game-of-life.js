const canvas = document.getElementById("conway-footer");
const drawingContext = canvas.getContext();

const cellSize = 10;
const gameWidth = Math.ceil(canvas.width / cellSize);
const gameHeight = Math.ceil(canvas.height / cellSize);

const backgroundColor = "#202020";
const cellColor = "#FF3854";

// true represents a living cell
let gameGrid = new Array(10).fill(new Array(10).fill(false));

function showGameGrid(gameGrid) {
  // Clears the canvas
  canvas.fillStyle = backgroundColor;
  canvas.fillRect(0, 0, canvas.width, canvas.height);
  // Draws the living cells on the canvas
  canvas.fillStyle = cellColor;
  for (let row = 0; row < gameGrid.length; row++) {
    for (let column = 0; column < gameGrid[row].length; column++) {
      const cell = gameGrid[row][column];
      if (cell) {
        canvas.fillRect(column * cellSize, row * cellSize, cellSize, cellSize)
      }
    }
  }
}

// The main loop for Conway's game of life
function mainLoop() {
  tick();
  requestAnimationFrame(mainLoop)
}

requestAnimationFrame(mainLoop)