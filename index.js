// Importing deppendencies
const inquirer = require('inquirer')
const fs = require('fs')

// Importing questions for inquirer
const { addManager, addTeamMember, addEngineer, addIntern} = require('./src/questions')

// Importing my classes
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Manager = require('./lib/manager')

// Empty array to push my employee roster into
const employees = []


// function to start the app
function init () {
    // starting with collecting manager information
    inquirer
    .prompt(addManager)
    .then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        if(manager) {
            // Once manager exists, pushes manager to employee array and calls newMember function
            employees.push(manager)
            newMember()
        }
    })
}

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

// calling init to start the app
init()