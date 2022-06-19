let randomProjects = document.getElementsByClassName("random-project-div")

function showProject(projectNumber) {
  let randomProject = randomProjects[projectNumber]
  randomProject.style.display = "block";
  randomProject.style.visibility = "visible";
}

function loadPage() {
  let projectName = window.location.hash;

  console.log(projectName)

  switch (projectName) {
    case "#AFK_Apex_Bot":
      showProject(1);
      break;
    case "#Bouncy":
      showProject(2);
      break;
    case "#COC_Auto_Bot":
      showProject(3);
      break;
    case "#DCS_Terminal":
      showProject(4);
      break;
    case "#Ethermine_Tracker":
      showProject(5)
      break;
    case "#Mazer":
      showProject(6);
      break;
    case "#Screen_Dimmer":
      showProject(7);
      break;
    case "#William_Whitakers_Words_App":
      showProject(8);
      break;
    case "#This_Website":
      showProject(9);
      break;
    default:
      showProject(Math.ceil(Math.random() * 9));
  }
}

loadPage();