let languages = document.getElementsByClassName("language");
let languageInfoBox = document.getElementsByClassName("language-info-box")[0] // Theres only one
const mainColor = getComputedStyle(languages[0]).getPropertyValue(
    "--mainColor");

// Sets Python as selected as default
selectLanguage(languages[0]);

// Iterates through the languages and formats the page based on the selected one
function selectLanguage(selectedLanguage) {
  for (const language of languages) {
    if (language === selectedLanguage) {
      console.log(selectedLanguage);
      language.style.cssText = `
        background-color: var(--blendedColor);
        border-radius: 100px;
      `;
      // Sets both the number and language name text color
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
      languageInfoBox.innerHTML = `
        <div class="progress-bars">
          <div class="chart">
            <span>Confidence:</span>
            <footer>
              <div class="progress-bar" id="confidence-bar"></div>
            </footer>
          </div>
          <div class="chart">
            <span>Enjoyment:</span>
            <footer>
              <div class="progress-bar" id="enjoyment-bar"></div>
            </footer>
          </div>
        </div>
        <p class="language-description">
            Python was the second language I learned. It's the one I'm most comfortable with, and 
            I've used it to make a variety of things.
          </p>
        <div class="example-projects">
          <div class="project" id="project1">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#Mazer">
                  <span>Mazer</span>
                </a>
                <p>Make a maze and watch as it is solved!</p>
              </div>
              <div class="project-bottom">
                <p>PyQt5</p>
                <a href="https://github.com/jacksonelia/Mazer" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="project" id="project2">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#DCS_Terminal">
                  <span>DCS Terminal</span>
                </a>
                <p>Automatically solves any course on Datacamp!</p>
              </div>
              <div class="project-bottom">
                <p>Selenium</p>
                <a href="https://github.com/jacksonelia/DCS_Terminal" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      // Sets the length of the bars
      document.getElementById("confidence-bar").style.cssText = "width: 100%;";
      document.getElementById("enjoyment-bar").style.cssText = "width: 100%;";
      break;

    case "Java":
      languageInfoBox.innerHTML = `
        <div class="progress-bars">
          <div class="chart">
            <span>Confidence:</span>
            <footer>
              <div class="progress-bar" id="confidence-bar"></div>
            </footer>
          </div>
          <div class="chart">
            <span>Enjoyment:</span>
            <footer>
              <div class="progress-bar" id="enjoyment-bar"></div>
            </footer>
          </div>
        </div>
        <p class="language-description">
          Java was the third language I learned. I started getting better and 
          more interested in it because it's what my robotics team uses.
        </p>
        <div class="example-projects">
          <div class="project" id="project1">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#Bouncy">
                  <span>Bouncy</span>
                </a>
                <p>A simple game that quickly becomes chaos.</p>
              </div>
              <div class="project-bottom">
                <p>Java AWT</p>
                <a href="https://github.com/jacksonelia/Bouncy" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="project" id="project2">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#Ethermine_Tracker">
                  <span>Ether Tracker</span>
                </a>
                <p>Tracks a miner address and stores data.</p>
              </div>
              <div class="project-bottom">
                <p>JavaFX - Selenium</p>
                <a href="https://github.com/jacksonelia/EthermineTracker" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      document.getElementById("confidence-bar").style.cssText = "width: 100%;";
      document.getElementById("enjoyment-bar").style.cssText = "width: 100%;";
      break;

    case "Swift":
      languageInfoBox.innerHTML = `
        <div class="progress-bars">
          <div class="chart">
            <span>Confidence:</span>
            <footer>
              <div class="progress-bar" id="confidence-bar"></div>
            </footer>
          </div>
          <div class="chart">
            <span>Enjoyment:</span>
            <footer>
              <div class="progress-bar" id="enjoyment-bar"></div>
            </footer>
          </div>
        </div>
        <p class="language-description">
          Swift was the first language I learned, but I lost interest overtime
          after I learned Python. I got really "good" at it, even doing machine
          learning!
        </p>
        <div class="example-projects">
          <div class="project" id="project1">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#William_Whitakers_Words_App">
                  <span>William Whitaker's</span>
                </a>
                <p>A Latin to English translation app.</p>
              </div>
              <div class="project-bottom">
                <p>Swift Soup</p>
                <a href="https://github.com/jacksonelia/WilliamWhitakersWordsSwiftApp" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="project" id="project2">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#Block_Drop">
                  <span>Block Drop</span>
                </a>
                <p>A tetris-inspired, block puzzle game. </p>
              </div>
              <div class="project-bottom">
                <p>SwiftUI</p>
                <a href="https://github.com/jacksonelia/Block-Drop" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      document.getElementById("confidence-bar").style.cssText = "width: 60%;";
      document.getElementById("enjoyment-bar").style.cssText = "width: 70%;";
      break;

    case "JS/TS":
      languageInfoBox.innerHTML = `
        <div class="progress-bars">
          <div class="chart">
            <span>Confidence:</span>
            <footer>
              <div class="progress-bar" id="confidence-bar"></div>
            </footer>
          </div>
          <div class="chart">
            <span>Enjoyment:</span>
            <footer>
              <div class="progress-bar" id="enjoyment-bar"></div>
            </footer>
          </div>
        </div>
        <p class="language-description">
          I first learned JavaScript with this website being
          my motivator. Then I learned TypeScript during my internship at Ndustrial and refined 
          my knowledge of it with personal projects.
        </p>
        <div class="example-projects">
          <div class="project" id="project1">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://github.com/yikuansun/drss">
                  <span>DRSS</span>
                </a>
                <p>A library creating dynamic style sheets via JS.</p>
              </div>
              <div class="project-bottom">
                <p>No libraries used</p>
                <a href="https://github.com/yikuansun/drss" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="project" id="project2">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://jacksonelia.github.io/random-project.html#Casino_Crawl">
                  <span>Casino Crawl</span>
                </a>
                <p>A small, game jam dungeon crawler.</p>
              </div>
              <div class="project-bottom">
                <p>Phaser</p>
                <a href="https://github.com/yikuansun/CasinoCrawler" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      document.getElementById("confidence-bar").style.cssText = "width: 70%;";
      document.getElementById("enjoyment-bar").style.cssText = "width: 80%;";
      break;

    case "C/C++":
      languageInfoBox.innerHTML = `
        <div class="progress-bars">
          <div class="chart">
            <span>Confidence:</span>
            <footer>
              <div class="progress-bar" id="confidence-bar"></div>
            </footer>
          </div>
          <div class="chart">
            <span>Enjoyment:</span>
            <footer>
              <div class="progress-bar" id="enjoyment-bar"></div>
            </footer>
          </div>
        </div>
        <p class="language-description">
          C is the newest language I've learned. I enjoy how its
          complexity can result in very fast speeds.
        </p>
        <div class="example-projects">
          <div class="project" id="project1">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://github.ncsu.edu/Wolf-Pack-Robotics/Programming-High-Stakes">
                  <span>Vex Robotics</span>
                </a>
                <p>I'm a programmer on NCSU's Vex Robotics Team.</p>
              </div>
              <div class="project-bottom">
                <p>Vex Pros</p>
                <a href="https://github.ncsu.edu/Wolf-Pack-Robotics/Programming-High-Stakes" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="project" id="project1">
            <div class="project-inner">
              <div class="project-top">
                <a href="https://github.com/JacksonElia/C_Games">
                  <span>C Games</span>
                </a>
                <p>A collection of visual oddities made with C.</p>
              </div>
              <div class="project-bottom">
                <p>No libraries used</p>
                <a href="https://github.com/JacksonElia/C_Games" target="_blank">
                  <i class="ion-social-github-outline"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
      document.getElementById("confidence-bar").style.cssText = "width: 70%;";
      document.getElementById("enjoyment-bar").style.cssText = "width: 90%;";
      break;
  }
}
