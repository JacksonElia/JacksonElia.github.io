const footer = document.getElementsByClassName("footer")[0];
const conwaySpeedSlider = document.getElementById("conway-speed-slider");
const conwayDensitySlider = document.getElementById("conway-density-slider");
const expandButton = document.getElementById("expand-button");
const canvas = document.getElementById("conway-footer");
const drawingContext = canvas.getContext('2d');

const backgroundColor = "#202020";
let cellColor = getComputedStyle(document.documentElement).getPropertyValue("--blendedColor")

let cellSize = 40;
// Makes cell size smaller if the user is on a small device
if (screen.width < 500) {
  cellSize = 20;
} else if (screen.width < 700) {
  cellSize = 30;
} else if (screen.width < 1000) {
  cellSize = 35;
}

canvas.width = footer.clientWidth;
canvas.height = footer.clientHeight;
let gameWidth = Math.ceil(canvas.width / cellSize);
if (screen.width < 700) {
  gameWidth -= 2
} else if (screen.width < 1000) {
  gameWidth -= 1
}
let gameHeight = Math.ceil(canvas.height / cellSize);


let expanded = false;
let expandingCount = 0;

let expanding = false;
let shrinking = false;

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

function startGame() {
  let density = 1 + (conwayDensitySlider.value / 100 - .7) / 1.75
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
  drawingContext.globalAlpha = 0.7;
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

function conwayTick() {
  conway_frameKeep++;
  if (conway_frameKeep % Math.round(23 - (conwaySpeedSlider.value / 5)) === 0) {
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

function expandConway() {
  expanded = !expanded;
  if (expanded) {
    footer.style.height = "100vh";
    expandButton.innerHTML = `<i class="icon ion-chevron-up"></i>`
    expanding = true;
  } else {
    expandButton.innerHTML = `<i class="icon ion-chevron-down"></i>`
    shrinking = true;
  }
}

// The main loop for Conway's game of life
function conwayMainLoop() {
  cellColor = getComputedStyle(document.documentElement).getPropertyValue("--blendedColor")
  // Does this in case the user changed the size of the window
  canvas.width = footer.clientWidth;
  canvas.height = footer.clientHeight;
  gameWidth = Math.ceil(canvas.width / cellSize);
  // Stops the menu buttons from being cluttered
  if (gameWidth > 2) {
    if (screen.width < 700) {
      gameWidth -= 2
    } else {
      gameWidth -= 1
    }
  }
  gameHeight = Math.ceil(canvas.height / cellSize);
  // This checks to make sure the matrix text is on screen, if its not, it doesn't run it
  let conway_rect = footer.getBoundingClientRect();
  if (!((conway_rect.x + conway_rect.width) < 0 || (conway_rect.y
      + conway_rect.height) < 0 || (conway_rect.x
      > window.innerWidth || conway_rect.y > window.innerHeight))) {
    if (shrinking) {
      expandingCount++;
      footer.style.height = "300px";
      canvas.width = footer.clientWidth;
      canvas.height = footer.clientHeight;
      gameWidth = Math.ceil(canvas.width / cellSize);
      if (gameWidth > 2) {
        if (screen.width < 700) {
          gameWidth -= 2
        } else {
          gameWidth -= 1
        }
      }
      gameHeight = Math.ceil(canvas.height / cellSize);
      if (expandingCount >= 55 * screen.height / 1000) {
        shrinking = false;
        expandingCount = 0;
        gameGrid = buildGameGrid();
        startGame();
      }
    } else {
      conwayTick();
    }
    if (expanding) {
      expandingCount++;
      expandButton.scrollIntoView();
      if (expandingCount >= 30) {
        expanding = false;
        expandingCount = 0;
      }
    }
  }
  requestAnimationFrame(conwayMainLoop);
}

let gameGrid = buildGameGrid();
startGame();

requestAnimationFrame(conwayMainLoop);
