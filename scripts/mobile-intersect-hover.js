let buttonsPresent = true;
let galleryPresent = true;

function checkButtons() {
  let buttons = document.getElementsByClassName("button1");
  for (let button of buttons) {
    focusCenterElement(button);
  }
}

function checkGallery() {
  let cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    focusCenterElement(cell);
  }
}

function focusCenterElement(element) {
  let element_rect = element.getBoundingClientRect();
  if (element_rect.y + element_rect.height / 2 >= window.innerHeight / 3 &&
      element_rect.y + element_rect.height / 2 <= 2 * window.innerHeight / 3) {
    element.focus();
    console.log("focus");
  } else {
    element.blur();
  }
}

function focusMainLoop() {
  // Only works on mobile devices
  if (screen.width < 1050) {
    if (buttonsPresent) {
      checkButtons();
    }

    if (galleryPresent) {
      checkGallery();
    }
  }

  requestAnimationFrame(focusMainLoop);
}

requestAnimationFrame(focusMainLoop);
