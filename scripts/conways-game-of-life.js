const footer = document.getElementsByClassName("footer")[0];
const canvas = document.getElementById("conway-footer");
const drawingContext = canvas.getContext('2d');

const backgroundColor = "#202020";
const cellColor = "#FF3854";
const cellSize = 50;

canvas.width = footer.clientWidth;
canvas.height = footer.clientHeight;
let gameWidth = Math.ceil(canvas.width / cellSize);
let gameHeight = Math.ceil(canvas.height / cellSize);

function buildGameGrid() {
  let newGameGrid = [];
  for (let row = 0; row < gameHeight; row++) {
    newGameGrid[row] = [];
    for (let column = 0; column < gameWidth; column++) {
      newGameGrid[row][column] = 0;
    }
  }
  return newGameGrid;
}

function start_game(density) {
  for (let row = 0; row < gameGrid.length; row++) {
    for (let column = 0; column < gameGrid[row].length; column++) {
      gameGrid[row][column] = Math.round(Math.random() * density);
    }
  }
}


function showGameGrid(gameGrid) {
  // Clears the canvas
  drawingContext.fillStyle = backgroundColor;
  drawingContext.fillRect(0, 0, canvas.width, canvas.height);
  // Draws the living cells on the canvas
  drawingContext.fillStyle = cellColor;
  // Goes through the gameGrid by row then by column
  for (let row = 0; row < gameGrid.length; row++) {
    for (let column = 0; column < gameGrid[row].length; column++) {
      const cell = gameGrid[row][column];
      // true represents a living cell
      if (cell) {
        drawingContext.fillRect(column * cellSize, row * cellSize, cellSize,
            cellSize)
      }
    }
  }
}

let conway_frameKeep = 0;

function conway_tick() {
  conway_frameKeep++;
  if (conway_frameKeep % 10 === 0) {
    let nextGameGrid = buildGameGrid();
    for (let row = 0; row < gameGrid.length; row++) {
      for (let column = 0; column < gameGrid[row].length; column++) {
        const cell = gameGrid[row][column];
        let neighbors = [];
        // This is a scuffed but efficient way of checking that the neighboring cells are in bounds
        if (row > 0 && row < gameGrid.length - 1 && column > 0 && column
            < gameGrid[row].length - 1) {
          // Cell in the middle of the grid
          neighbors = [
            gameGrid[row - 1][column - 1], // Top left
            gameGrid[row - 1][column],     // Top middle
            gameGrid[row - 1][column + 1], // Top right
            gameGrid[row][column - 1],     // Middle left
            gameGrid[row][column + 1],     // Middle right
            gameGrid[row + 1][column - 1], // Bottom left
            gameGrid[row + 1][column],     // Bottom middle
            gameGrid[row + 1][column + 1], // Bottom right
          ]
        } else if (row === 0 && column > 0 && column < gameGrid[row].length
            - 1) {
          // Cell in the first row of the grid
          neighbors = [
            gameGrid[row][column - 1],     // Middle left
            gameGrid[row][column + 1],     // Middle right
            gameGrid[row + 1][column - 1], // Bottom left
            gameGrid[row + 1][column],     // Bottom middle
            gameGrid[row + 1][column + 1], // Bottom right
          ]
        } else if (row === gameGrid.length - 1 && column > 0 && column
            < gameGrid[row].length - 1) {
          // Cell in the last row of the grid
          neighbors = [
            gameGrid[row - 1][column - 1], // Top left
            gameGrid[row - 1][column],     // Top middle
            gameGrid[row - 1][column + 1], // Top right
            gameGrid[row][column - 1],     // Middle left
            gameGrid[row][column + 1],     // Middle right
          ]
        } else if (row > 0 && row < gameGrid.length - 1 && column === 0) {
          // Cell in the first column of the grid
          neighbors = [
            gameGrid[row - 1][column],     // Top middle
            gameGrid[row - 1][column + 1], // Top right
            gameGrid[row][column + 1],     // Middle right
            gameGrid[row + 1][column],     // Bottom middle
            gameGrid[row + 1][column + 1], // Bottom right
          ]
        } else if (row > 0 && row < gameGrid.length - 1 && column
            === gameGrid[row].length - 1) {
          // Cell in the last column of the grid
          neighbors = [
            gameGrid[row - 1][column - 1], // Top left
            gameGrid[row - 1][column],     // Top middle
            gameGrid[row][column - 1],     // Middle left
            gameGrid[row + 1][column - 1], // Bottom left
            gameGrid[row + 1][column],     // Bottom middle
          ]
        } else if (row === 0 && column === 0) {
          // Cell in the top left corner
          neighbors = [
            gameGrid[row][column + 1],     // Middle right
            gameGrid[row + 1][column],     // Bottom middle
            gameGrid[row + 1][column + 1], // Bottom right
          ]
        } else if (row === 0 && column === gameGrid[row].length - 1) {
          // Cell in the top right corner
          neighbors = [
            gameGrid[row][column - 1],     // Middle left
            gameGrid[row + 1][column - 1], // Bottom left
            gameGrid[row + 1][column],     // Bottom middle
          ]
        } else if (row === gameGrid.length - 1 && column === 0) {
          // Cell in the bottom left corner
          neighbors = [
            gameGrid[row - 1][column],     // Top middle
            gameGrid[row - 1][column + 1], // Top right
            gameGrid[row][column + 1],     // Middle right
          ]
        } else {
          // Cell in the bottom right corner
          neighbors = [
            gameGrid[row - 1][column - 1], // Top left
            gameGrid[row - 1][column],     // Top middle
            gameGrid[row][column - 1],     // Middle left
          ]
        }
        let liveNeighbors = 0;
        for (const neighbor of neighbors) {
          liveNeighbors += neighbor;
        }
        // Checks rules 1, 2, and 3 if the cell is alive
        if (cell && (liveNeighbors === 2 || liveNeighbors === 3)) {
          nextGameGrid[row][column] = 1;
        } else if (!cell && liveNeighbors === 3) {
          nextGameGrid[row][column] = 1;
        }
      }
    }
    gameGrid = nextGameGrid;
  }
  showGameGrid(gameGrid);
}

// The main loop for Conway's game of life
function conway_mainLoop() {
  // Does this in case the user changed the size of the window
  canvas.width = footer.clientWidth;
  canvas.height = footer.clientHeight;
  gameWidth = Math.ceil(canvas.width / cellSize);
  gameHeight = Math.ceil(canvas.height / cellSize);
  conway_tick();
  requestAnimationFrame(conway_mainLoop);
}

let gameGrid = buildGameGrid();
start_game(1);

requestAnimationFrame(conway_mainLoop);
