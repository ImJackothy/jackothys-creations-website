
function renderProjects(Projects, full) {

    for (let i = 0; i<Projects.length; i++) {
        let sel = Projects[i]
        let size = "full_projectContainer"

        if (full === false) {
            size = "projectContainer"
        }

        let exampleHtml = `<button id="project-${i}" class="invisibleButton" onclick="projectLoad(this)"><div class="${size}">
                    <div class="head">
                        <img src="Projects/${sel["img"]}" alt="" class="projectImg">
                        <h1 class="projectTitle">${sel["title"]}</h1>
                    </div>

                    <div class="body">
                        <p name="projectDesc">${sel["desc"]}</p>
                    </div>

                    <img src="Img/github.png"} alt="" class="socialImg">
                    '<img src="Img/mcpedl.png"} alt="" class="socialImg">
                </div></button>`

        document.getElementById("projects").innerHTML += exampleHtml
    }
}

function projectLoad(element) {
    let name = element.id.split("project-")[1]
    window.location = `project_page.html#${name}`
}


let navbar = `
<div class="navbar">
        
        <a href="aboutme.html"><button class="navbarElement">
            <img src="Img/icon1.jpg" alt="" class="navbarImg">
            <h1 class="navbarInfo">AboutMe</h1>
        </button></a>

        <a href="projects.html"><button class="navbarElement">
            <img src="Img/folder.png" alt="" class="navbarImg">
            <h1 class="navbarInfo">Projects</h1>
        </button></a>

        <a href="socials.html"><button class="navbarElement">
            <img src="Img/social.png" alt="" class="navbarImg">
            <h1 class="navbarInfo">Socials</h1>
        </button></a>

        <a href="index.html"><button class="logoElement">
            <img src="Img/logo.png" alt="" class="logoImg">
        </button></a>

        <a href="https://discord.gg/7nS3WQPFsx"><button class="navbarElement" style="padding-right: 10vw;">
            <img src="Img/discord_icon.png" alt="" class="navbarImg">
            <h1 class="navbarInfo">Discord</h1>
        </button></a>

        
    </div>`

let all = [
    {"title": "ComputerCraft BE", "desc": "A complete rewrite of the original computercraft mode made for java has been rewrote in TS and has near same functionality!", "img":"computer_craft.png"}
]
let highlighted = [
    {"title": "ComputerCraft BE", "desc": "A complete rewrite of the original computercraft mode made for java has been rewrote in TS and has near same functionality!", "img":"computer_craft.png"}
]

let OrbitalSmasher = {"title": "Orbital Smasher", "desc": "A Game made in the 72-hour Game Jam ( Mini Jam 185 ).  I Worked a normal work week( 40 Hours/w ) while making this game, lots to improve", "img":"OrbitalSmasher_Icon.png"}

all.push(OrbitalSmasher)
highlighted.push(OrbitalSmasher)
let params = window.location.href.split("#")
console.log(params)
let pathname = document.title
switch (pathname) {
    case "Home":renderProjects(highlighted, false); break;
    case "Projects":{renderProjects(all, true); break;}
    case "ProjectPage":{
        if (1 in params) {
            renderProjects([ all[Number(params[1])] ], true)
            break
        }
    }
}

document.body.innerHTML += navbar
