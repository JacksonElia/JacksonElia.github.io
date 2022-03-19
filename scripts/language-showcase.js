let languages = document.getElementsByClassName("language");
const mainColor = getComputedStyle(languages[0]).getPropertyValue("--mainColor");

selectLanguage(languages[0])

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

function setLanguageInfo(language) {
  switch (language.getElementsByTagName("p")[1].textContent) {
    case "Python":
      console.log("py")
  }
}