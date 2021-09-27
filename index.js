// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// wrpaing function to to return inquirer returned data
const promptUser = () => {
    return inquirer.prompt([
        //project questions
        {
            type:'input',
            name: 'Title',
            message: 'What is your Project title?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Enter a description of your project',
          }
    ]);
};

// TODO: Create an array of questions for user input
const promptProject = portfolioData => {
    // empty array is essentially the data collecting system.
  // If there's no 'projects' array property, create one --- this is a check to make sure array is not cleared each time funct is called
if (!portfolioData.projects) {
  portfolioData.projects = [];
};
}


// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

promptUser()
  .then(promptProject)
  .then(portfolioData => {
   console.log(portfolioData);
  }); 