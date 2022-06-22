const matrixTextBox = document.getElementById("matrix-text")

function createScroll(x, y, height, scale, shiny) {
  let scroll = document.createElement("div");
  if (shiny) {
    scroll.className = "matrix-scroll-shiny"
  } else {
    scroll.className = "matrix-scroll"
  }
  scroll.style.top = `${y}px`;
  scroll.style.left = `${x}px`;
  scroll.style.height = `${height}px`;
  scroll.style.transform = `scale(${scale})`;
  document.querySelector("#matrix-text").appendChild(scroll);
}

let matrix_text_frameKeep = 0;

function matrix_text_tick() {
  matrix_text_frameKeep++;
  if (matrix_text_frameKeep % 6 === 0) {
    let height = Math.floor(Math.random() * 600) + 100;
    createScroll(
        Math.floor(Math.random() * matrixTextBox.offsetWidth),
        -height - 100,
        height,
        1 + Math.random() / 2.5,
        (Math.random() >= .9)
    );
  }

  let speed = 10;
  let scrollsToRemove = [];
  for (let scroll of
      document.querySelectorAll(".matrix-scroll,.matrix-scroll-shiny")) {
    let currentY = parseFloat(scroll.style.top);
    let scale = parseFloat(scroll.style.transform.replace("scale(", ""))
    scroll.style.top = `${currentY + speed}px`;
    if (parseFloat(scroll.style.top)
        > matrixTextBox.getBoundingClientRect().height + 1000) {
      scrollsToRemove.push(scroll);
    }
  }

  for (let i = 0; i < scrollsToRemove.length; i++) {
    scrollsToRemove[i].remove();
  }
}

// The main loop for the matrix text
function matrix_text_mainLoop() {
  // This checks to make sure the matrix text is on screen, if its not, it doesn't run it
  let rect = matrixTextBox.getBoundingClientRect();
  if (!((rect.x + rect.width) < 0 || (rect.y + rect.height) < 0 || (rect.x
      > window.innerWidth || rect.y > window.innerHeight))) {
    matrix_text_tick();
  }
  requestAnimationFrame(matrix_text_mainLoop);
}

requestAnimationFrame(matrix_text_mainLoop);