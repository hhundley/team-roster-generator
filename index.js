const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateRoster = require('./src/generateRoster.js');
const team = [];

// Build arrays of questions for different employee types
// Manager Questions
const managerQuestions = [
    {
        type: "input",
        message: "Enter manager name.",
        name: "managerName"
    },
    {
        type: "input",
        message: "Enter manager id.",
        name: "managerId"
    },
    {
        type: "input",
        message: "Enter manager email address.",
        name: "managerEmail"
    },
    {
        type: "input",
        message: "Enter manager office number.",
        name: "officeNumber"
    },
];

// Engineer Questions
const engineerQuestions = [
    {
        type: "input",
        message: "Enter engineer name.",
        name: "engineerName"
    },
    {
        type: "input",
        message: "Enter engineer id.",
        name: "engineerId"
    },
    {
        type: "input",
        message: "Enter engineer email address.",
        name: "engineerEmail"
    },
    {
        type: "input",
        message: "Enter engineer github username.",
        name: "github"
    },
]

// Intern Questions
const internQuestions = [
    {
        type: "input",
        message: "Enter intern name.",
        name: "internName"
    },
    {
        type: "input",
        message: "Enter intern id.",
        name: "internId"
    },
    {
        type: "input",
        message: "Enter intern email address.",
        name: "internEmail"
    },
    {
        type: "input",
        message: "Enter intern school.",
        name: "school"
    },
]
// Menu Question
const menuQuestions = [
    {
        type: "list",
        message: "What would you like to do next?",
        name: "menuOption",
        choices:[
            "Add an engineer",
            "Add an intern",
            "Finish building team"
        ]
    },
   
]

// Initialize app and build functions
function menuPrompt() {
    inquirer.prompt(menuQuestions)
    .then((answers) => {
        switch(answers.menuOption) {
            case "Add an engineer":
                engineerPrompt();
                break
            case "Add an intern":
                internPrompt();
                break
            case "Finish building team":
                finishTeam();
                break
        }
    })
}

function engineerPrompt(){
    inquirer.prompt(engineerQuestions)
    .then((answers) => {
    //   create a new engineer
    const engineer = new Engineer(answers.engineerName,answers.engineerId,answers.engineerEmail,answers.github);
    team.push(engineer);
    console.log(engineer);
    menuPrompt();
    });
}

function internPrompt(){
    inquirer.prompt(internQuestions)
    .then((answers) => {
    //   create a new engineer
    const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.school);
    team.push(intern);
    console.log(intern);
    menuPrompt();
    });
}

function init() {
    inquirer.prompt(managerQuestions)
    .then((answers) => {
    //   create a new manager
    const manager = new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.officeNumber);
    team.push(manager);
    console.log(manager);
    menuPrompt();
    });
}

function finishTeam() {
    console.log('Finished');
    console.log(team);
    // write to file function w/ team as data
    fs.writeFile("team.html", generateRoster(team), (err) => {
        if (err) throw new Error(err);
    
        console.log("Roster successfully created.")
      });
}
init();