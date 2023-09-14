let randomProjects = document.getElementsByClassName("random-project-div")

function showProject(projectNumber) {
  for (let randomProject of randomProjects) {
    randomProject.style.display = "none";
    randomProject.style.visibility = "hidden";

  }
  let randomProject = randomProjects[projectNumber]
  randomProject.style.display = "block";
  randomProject.style.visibility = "visible";
}

function loadPage() {
  let projectName = window.location.hash;

  switch (projectName) {
    case "#AFK_Apex_Bot":
      showProject(1);
      break;
    case "#Bouncy":
      showProject(2);
      break;
    case "#Casino_Crawl":
      showProject(3);
      break;
    case "#COC_Auto_Bot":
      showProject(4);
      break;
    case "#DCS_Terminal":
      showProject(5);
      break;
    case "#Ethermine_Tracker":
      showProject(6)
      break;
    case "#Mazer":
      showProject(7);
      break;
    case "#Screen_Dimmer":
      showProject(8);
      break;
    case "#This_Website":
      showProject(9);
      break;
    case "#William_Whitakers_Words_App":
      showProject(10);
      break;
    case "#Block_Drop":
      showProject(11);
      break;
    case "#NCT4AA_Website":
      showProject(12);
      break;
    case "#TigerLib":
      showProject(13);
      break;
    case "#TitaniumTigersWebsite":
      showProject(14);
      break;
    default:
      showProject(Math.ceil(Math.random() * 14));
  }
}

loadPage();