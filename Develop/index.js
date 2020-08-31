var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./generateMarkdown")


// array of questions for user
const questions = [
 {
     type: "input",
     message: "What is your README title?",
     name: "title"
 },
 {
    type: "input",
    message: "What is the description of this README?",
    name: "description"
},
{
    type: "input",
    message: "What are your installation instructions?",
    name: "installation"
},
{
    type: "input",
    message: "What is your project usage?",
    name: "usage"
},
{
    type: "input",
    message: "What are your contribution guidelines?",
    name: "contributing"
},
{
    type: "input",
    message: "What are your test instructions?",
    name: "test"
},
{
    type: "list",
    message: "What is your project license?",
    name: "license",
    choices: [
        "MIT",
        "Apache",
        "GPL"
      ]
},
{
    type: "input",
    message: "What is your GitHub username?",
    name: "username"
},
{
    type: "input",
    message: "What is your email?",
    name: "email"
},
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(function (data) {
            var fileName = data.title.toLowerCase().split(' ').join('') + ".md";
            var md = generateMarkdown(data);
            fs.writeFile(fileName, md, function (err) {
              if (err) {
                return console.log(err);
              }
              console.log("Success!");
            });
          });
}

// function call to initialize program
init();
