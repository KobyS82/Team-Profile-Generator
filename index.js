// link to page creation
const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// team array
const teamArray = []; 

// prompt main menu questions
const questions = [
    {
      type: 'list',
      name: 'role',
      message: 'Please choose a role for the employee you would like to add.',
      choices: ['Manager', 'Engineer', 'Intern', 'None']
    }
  ];


// start of employee prompts 

// manager questions
const manager = [
    {
      type: 'input',
      name: 'name',
      message: "What is the Mangers name?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?',
    },
    {
      type: 'number',
      name: 'office',
      message: 'What is their office number?'
    }
  
  ];
  
  // engineer questions
  const engineer = [
    {
      type: 'input',
      name: 'name',
      message: "What is the Engineers name?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?',
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is their Github username?'
    }
  
  ];
  
  // intern questions
  const intern = [
    {
      type: 'input',
      name: 'name',
      message: "What is the Interns name?",
    },
    {
      type: 'number',
      name: 'id',
      message: 'What is their id number?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is their email?',
    },
    {
      type: 'input',
      name: 'school',
      message: 'What school do they attend?'
    }
  ];

// initialize app
function init() {
    // prompt questions
    inquirer.prompt(questions).then(answers => {
      // generate team
      if (answers.role === 'None') {
        console.log(answersArr);
        generateTeam();
        return;
      }
      // create manager
      if (answers.role === 'Manager') {
        inquirer.prompt(manager).then(answers => {
          const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
          answersArr.push(manager);
          init();
        })
      }
      // create engineer
      if (answers.role === 'Engineer') {
        inquirer.prompt(engineer).then(answers => {
          const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
          answersArr.push(engineer);
          init();
        })
      }
      // create intern
      if (answers.role === 'Intern') {
        inquirer.prompt(intern).then(answers => {
          const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
          answersArr.push(intern);
          init();
        })
      }
    })
  };
  
  // initialize app
  init();
  
  
  // generates team
  function generateTeam() {
    fs.writeFileSync('./dist/generatedTeam.html', generateHTML(answersArr), "utf-8");
    console.log('Finished generating team.')
  };
