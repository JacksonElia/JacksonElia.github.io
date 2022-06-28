function isElementInMiddleOfScreen(element) {
  let element_rect = element.getBoundingClientRect();
  if (1.3 * element_rect.y >= 2 * window.innerHeight / 4 && .7 * (element_rect.y + element_rect.height) <= 3 * window.innerHeight / 4) {
    console.log("in middle")
  }
}