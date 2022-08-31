// function to use inquirer inputs and put into generated html.
function generateTeam(team) {
    // empty array to hold body of html
    const html = [];
    function renderManagerCard(manager) {
        let managerCard = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${manager.name} (Manager)</h5>
                <p class="card-text">ID:${manager.id}</p>
                <p class="card-text">Office Number:${manager.officeNumber}</p>
                <a href="mailto:${manager.email}" class="btn btn-primary">Email</a>
            </div>
        </div>
        `;
    // adds manager card to html array
    html.push(managerCard);
    }

    function renderEngineerCard(engineer) {
    let engineerCard = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${engineer.name} (Engineer)</h5>
                <p class="card-text">ID:${engineer.id}</p>
                <p class="card-text">Github: <a href = "https://github.com/${engineer.github}">${engineer.github}</a></p>
                <a href="mailto:${engineer.email}" class="btn btn-primary">Email</a>
            </div>
        </div>
        `;
    // adds enginer card to html array
    html.push(engineerCard);
    }

    function renderInternCard(intern) {
    let internCard = `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${intern.name} (Intern)</h5>
                <p class="card-text">ID:${intern.id}</p>
                <p class="card-text">School: ${intern.school}</p>
                <a href="mailto:${intern.email}" class="btn btn-primary">Email</a>
            </div>
        </div>
        `;
    // adds intern card to html array
    html.push(internCard);
    }

    for(let i = 0; i < team.length; i++) {
       if (team[i].getRole() === "Manager") {
            renderManagerCard(team[i]);
       } 
       if (team[i].getRole() === "Engineer") {
        renderEngineerCard(team[i]);
        }
        if (team[i].getRole() === "Intern") {
            renderInternCard(team[i]);
        }
    }
    // combines elements in html array to be a cohesive block in body of html
    return html.join('');
}

// generates html that will be put into generated html file
function generateRoster(team) {
    return `
<!DOCTYPE html>
<html lang="en-us">

    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team</title>
        <link rel="stylesheet" href="./src/reset.css" />
        <link rel="stylesheet" href="./dist/style.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    </head>

    <header class="jumbotron bg-cover text-white">
        <div class="container py-5 text-center">
            <h1 class="display-4 font-weight-bold">The Team</h1>
        </div>
    </header>

    <body>
        <div class="row">
            ${generateTeam(team)}
        </div>
    </body>

      <!-- Footer -->
      <footer>
        <h3>Made with <span role="img" aria-label="heart">❤️</span></h3>
    </footer>
    `;
    }

    // exports module to be used by index
    module.exports = generateRoster;