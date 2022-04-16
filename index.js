// Importing deppendencies
const inquirer = require('inquirer')
const fs = require('fs')    
// Importing my classes
const Employee = require('./lib/employee')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

const employees = []

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
const addTeamMember = [
    {
        type: 'list',
        name: 'addNext',
        message: 'Too add more team members select from the roles beow or finish to generate your team.',
        choices: ['Engineer', 'Intern', 'Finish']
    }
]
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
const addIntern = []

function init () {
    inquirer
    .prompt(managerQuestions)
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        console.log(manager);
        if(manager) {
            employees.push(manager)
            newMember()
        }
    })
}

init()

function newMember () {
    inquirer
            .prompt(addTeamMember)
            .then(answers => {
                if(answers.addNext === 'Engineer') {
                    inquirer
                    .prompt(addEngineer)
                    .then(answers => {
                        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
                        employees.push(engineer)
                        newMember()
                    })
                } else if (answers.addNext === 'Intern') {
                    console.log('add intern prompts here');
                    newMember()
                } else {
                    console.log('run function to generate html');
                    console.log(employees);
                }
            })
}