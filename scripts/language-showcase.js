let languages = document.getElementsByClassName("language");
const mainColor = getComputedStyle(languages[0]).getPropertyValue("--mainColor");

// Sets Python as selected as default
selectLanguage(languages[0]);

// Iterates through the languages and formats the page based on the selected one
function selectLanguage(selectedLanguage) {
  for (const language of languages) {
    if (language === selectedLanguage) {
      console.log(selectedLanguage);
      language.style.cssText = `
        background-color: var(--blendedColor);
        border-radius: 20px;
      `;
      language.getElementsByTagName("p")[0].style.color = mainColor;
      language.getElementsByTagName("p")[1].style.color = mainColor;
      setLanguageInfo(language)
    } else {
      language.style.cssText = "";
      language.getElementsByTagName("p")[0].style.cssText = "";
      language.getElementsByTagName("p")[1].style.cssText = "";
    }
  }
}

// Formats the info box based on what language is selected
function setLanguageInfo(language) {
  switch (language.getElementsByTagName("p")[1].textContent) {
    case "Python":
        // language.innerHTML = `
        //
        // `;
      break;
    case "Java":

      break;
    case "Swift":

      break;
    case "JavaScript":

      break;
  }
}