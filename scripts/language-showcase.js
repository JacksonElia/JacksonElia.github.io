
var libox = document.getElementsByClassName("language-info-box")[0];
var languagelabels = document.getElementsByClassName("language");
function populateInfoBox(info = "<i>nah</i>") {
  libox.innerHTML = info;
}
languagelabels[0].addEventListener("click", function() {
  populateInfoBox("js");
});
languagelabels[1].addEventListener("click", function() {
  populateInfoBox("hjl");
});
languagelabels[2].addEventListener("click", function() {
  populateInfoBox("s");
});
languagelabels[3].addEventListener("click", function() {
  populateInfoBox("among us");
});