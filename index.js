// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');
const { default: Choices } = require('inquirer/lib/objects/choices.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: '\n-------------\n\nWelcome to the all in one README.md generator! \nLet\'s get started!\n\n-------------\n\nWhats the title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: '\n-------------\n\nProvide a short description explaining the what, why, and how of your project. Use the following questions as a guide\n\n- What was your motivation?\n- Why did you build this project?\n- What problem does it solve?\n- What did you learn?\n\nWrite the projects description here'
  },
  {
    type: 'input',
    name: 'installation',
    message: '\n-------------\n\nLet\'s move on to the installation instructions \nProvide a step-by-step description of how to get the development environment running.\n\nWhat are the steps required to install your project?'
  },
  {
    type: 'input',
    name: 'usage',
    message: '\n-------------\n\nExplain the project\'s information required for usage\n\nProvide instructions and examples for use',
  },
  {
    type: 'input',
    name: 'contribution',
    message: '\n-------------\n\nList your collaborators, if any, with links to their GitHub profiles\nIf you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section\nIf you followed tutorials, include links to those here as well\n\nWho would you like to give credit to?'
  },
  {
    type: 'input',
    name: 'tests',
    message: '\n-------------\n\nWhy not go the extra mile and write tests for your application\n\nProvide examples on how to run them here'
  },
  {
    type: 'list',
    name: 'license',
    message: '\n-------------\n\nWhat license would you like your project to include?\n',
    choices: [
      'MIT License',
      'Apache License 2.0',
      'Mozilla Public License 2.0'
    ]
  },
  {
    type: 'input',
    name: 'github',
    message: '\n-------------\n\nAlmost there!\n\nWhat is your Github username?'
  },
  {
    type: 'input',
    name: 'email',
    message: '\n-------------\n\nFinally, how can people get into contact with you if they have any questions\n\nWhat is your email address?'
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
}

// Function call to initialize app
init();
