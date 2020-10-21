const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please describe your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide installation instructions"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide detailed instruction on how to use your project"
    },
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username"
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email"
    },
    {
        type: "text",
        name: "contributing",
        message: "Please define contributor guidelines"
    },
    {
        type: "text",
        name: "tests",
        message: "Please provide testing instructions for your project"
    },
    {
        message: "Please select an open-source license for your project.",
        name: "license",
        type: "list",
        choices: ['MIT', 'Apache-2.0', 'GPL v3', 'GPL v2', 'BSD 3-Clause', 'BSD 2-Clause', 'LGPL v3']
    },
];

// function to write README file
function writeToFile(data) {
    
    const README = generateMarkdown(data);

    let fileName = data.title.trim().split(" ").join("-").toLowerCase() + "README.md";
    fs.writeFile(fileName, README, () => {});
}

// function to initialize program
async function init() {
    let data = await inquirer.prompt(questions);
    writeToFile(data);
}

// function call to initialize program
init();
