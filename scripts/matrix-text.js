
function createScroll(x, y, scale, blur) {
  var scroll = document.createElement("div");
  scroll.className = "matrix-scroll";
  scroll.style.top = `${y}px`;
  scroll.style.left = `${x}px`;
  scroll.style.transform = `scale(${scale})`;
  scroll.style.filter = `blur(${blur}px)`;
  document.querySelector(".matrix-text").appendChild(scroll);
  return scroll;
}

var scroll = createScroll(100, 100, 1, 1);

function tick() {
  for (var scroll of document.getElementsByClassName("matrix-scroll")) {
    var speed = 10;
    var currenty = parseFloat(scroll.style.top);
    var scale = parseFloat(scroll.style.transform.replace("scale("))
    scroll.style.top = `${currenty + speed}px`;
  }
}

function mainLoop() {
  tick();
  requestAnimationFrame(mainLoop)
}

requestAnimationFrame(mainLoop)