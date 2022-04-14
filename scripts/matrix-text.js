let matrixTextBox = document.getElementById("matrix-text")

function createScroll(x, y, height, scale) {
  let scroll = document.createElement("div");
  scroll.className = "matrix-scroll";
  scroll.style.top = `${y}px`;
  scroll.style.left = `${x}px`;
  scroll.style.height = `${height}px`;
  scroll.style.transform = `scale(${scale})`;
  document.querySelector("#matrix-text").appendChild(scroll);
  return scroll;
}

let frameKeep = 0;

function tick() {
  frameKeep++;
  if (frameKeep % 6 === 0) {
    let height = Math.floor(Math.random() * 600) + 100;
    createScroll(
        Math.floor(Math.random() * matrixTextBox.offsetWidth),
        -height - 100,
        height,
        1 + Math.random() / 2.5
    );
  }

  let speed = 10;
  var scrollsToRemove = [];
  for (let scroll of document.getElementsByClassName("matrix-scroll")) {
    let currentY = parseFloat(scroll.style.top);
    let scale = parseFloat(scroll.style.transform.replace("scale(", ""))
    scroll.style.top = `${currentY + speed}px`;
    if (parseFloat(scroll.style.top) > matrixTextBox.getBoundingClientRect().height + 500) {
      scrollsToRemove.push(scroll);
      console.log(scroll.style.top)
    }
  }

  for (var i = 0; i < scrollsToRemove.length; i++) {
    scrollsToRemove[i].remove();
  }
}

function mainLoop() {
  tick();
  requestAnimationFrame(mainLoop)
}

requestAnimationFrame(mainLoop)