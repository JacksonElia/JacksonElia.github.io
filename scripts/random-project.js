const randomProjects = document.getElementsByClassName("random-project-div");

const hashToProjectTitle = {
  "#AFK_Apex_Bot": "AFK Apex Bot",
  "#Bouncy": "Bouncy",
  "#Casino_Crawl": "Casino Crawl",
  "#COC_Auto_Bot": "COC Auto Bot",
  "#DCS_Terminal": "DCS Terminal",
  "#Ethermine_Tracker": "Ethermine Tracker",
  "#Mazer": "Mazer",
  "#Screen_Dimmer": "Screen Dimmer",
  "#This_Website": "This Website",
  "#William_Whitakers_Words_App": "William Whitaker's Words App",
  "#Block_Drop": "Block Drop",
  "#NCT4AA_Website": "NCT4AA Website",
  "#TigerHelpers": "TigerHelpers",
  "#TitaniumTigersWebsite": "Titanium Tigers Website",
  "#AirbrakesV2": "AirbrakesV2",
  "#FIRM_Flight_Computer": "FIRM Flight Computer",
  "#HPRM": "High-Powered Rocketry Modeling",
};

function hideAllProjects() {
  for (const randomProject of randomProjects) {
    randomProject.style.display = "none";
    randomProject.style.visibility = "hidden";
  }
}

function showProject(projectElement) {
  hideAllProjects();
  projectElement.style.display = "block";
  projectElement.style.visibility = "visible";
}

function findProjectByTitle(title) {
  for (const randomProject of randomProjects) {
    const titleElement = randomProject.querySelector(".page-title");
    if (titleElement && titleElement.textContent.trim() === title) {
      return randomProject;
    }
  }
  return null;
}

function loadPage() {
  const currentHash = window.location.hash;
  const projectTitle = hashToProjectTitle[currentHash];

  if (currentHash) {
    if (!projectTitle) {
      console.error(`Unknown project hash: ${currentHash}`);
      showProject(randomProjects[1]);
      return;
    }

    const matchingProject = findProjectByTitle(projectTitle);
    if (!matchingProject) {
      console.error(`Mapped project title not found: ${projectTitle}`);
      showProject(randomProjects[1]);
      return;
    }

    showProject(matchingProject);
    return;
  }

  const firstRealProjectIndex = 1; // skip the template block
  const randomIndex =
    Math.floor(
      Math.random() * (randomProjects.length - firstRealProjectIndex),
    ) + firstRealProjectIndex;
  showProject(randomProjects[randomIndex]);
}

loadPage();
