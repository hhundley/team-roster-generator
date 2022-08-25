const inquirer = require('inquirer');
const fs = require('fs');

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