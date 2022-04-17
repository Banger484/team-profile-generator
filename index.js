// Importing deppendencies
const inquirer = require('inquirer')
const fs = require('fs')

// Importing my classes
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

// Empty array to push my employee roster into
const employees = []

// Questions to gather the manager's information
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the manager's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the manager's employee id."
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the manager's email address."
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "Please enter the office number."
    },
]

// Question used for logic to direct the flow through the prompts
const addTeamMember = [
    {
        type: 'list',
        name: 'addNext',
        message: 'Too add more team members select from the roles beow or finish to generate your team.',
        choices: ['Engineer', 'Intern', 'Finish']
    }
]

// Questions to gather engineer's information
const addEngineer = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the engineer's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the engineer's employee id."
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the engineer's email address."
    },
    {
        type: 'input',
        name: 'github',
        message: "Please enter the engineer's github username."
    },
]

// Questions to gather intern's information
const addIntern = [
    {
        type: 'input',
        name: 'name',
        message: "Please enter the engineer's name."
    },
    {
        type: 'input',
        name: 'id',
        message: "Please enter the engineer's employee id."
    },
    {
        type: 'input',
        name: 'email',
        message: "Please enter the engineer's email address."
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the name of your school."
    },
]

// function to start the app
function init () {
    // starting with collecting manager information
    inquirer
    .prompt(managerQuestions)
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(manager);
        if(manager) {
            // Once manager exists, pushes manager to employee array and calls newMember function
            employees.push(manager)
            newMember()
        }
    })
}

// calling init to start the app
init()

// This function will ask if they want to add a new engineer, new intern, or finish adding employees.
function newMember () {
    inquirer
            .prompt(addTeamMember)
            .then(answers => {
                // logic will direct the flow based on the user input
                if(answers.addNext === 'Engineer') {
                    inquirer
                    .prompt(addEngineer)
                    .then(answers => {
                        // creates new engineer and pushes it into employee array
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                        employees.push(engineer)
                        newMember()
                    })
                } else if (answers.addNext === 'Intern') {
                    inquirer
                    .prompt(addIntern)
                    .then(answers => {
                        // creates new intern and pushes it into employee array
                        const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
                        employees.push(intern)
                        newMember()
                    })
                } else {
                    console.log('run function to generate html');
                    console.log(employees);
                }
            })
}