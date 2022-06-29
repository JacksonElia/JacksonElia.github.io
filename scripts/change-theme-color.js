let root = document.documentElement;
let changedColor = false;

if (Math.round(Math.random() * 8) === 5) {
  changedColor = true;
  root.style.setProperty("--themeColor", "#323cff");
  root.style.setProperty("--secondaryThemeColor", "#29ff94");
  root.style.setProperty("--blendedColor", "#2e83d7");
  root.style.setProperty("--filterColor", "130deg");
}