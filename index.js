var inquirer = require("inquirer");
var fs = require("fs");


// array of questions for user
const questions = [
 {
     type: "input",
     message: "What is your GitHub username?",
     name: "username"
 }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
}

// function call to initialize program
init();
