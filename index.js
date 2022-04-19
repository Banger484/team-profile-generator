// Importing dependencies
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
            
            writeToFile('dist/index.html', JSON.stringify(employees))
            employees.forEach(employee => {
                console.log(employee.getRole())
            })
        }
    })
}

function writeToFile(fileName) {
    fs.writeFile(fileName, htmlMagic(), (err) => {
        if(err) {
            console.error(err);
        }
    })
}

function htmlMagic () {
   return `<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>My Team</title>
       <link rel="stylesheet" href="style.css">

   </head>
   <body>
       <header>
            <h1>My Team</h1>
       </header>
       <div id="card-holder">
        ${cardMake()}
       </div>
   </body>
   </html>`
}

// calling init to start the app
init()

function cardMake () {
    const response = []
    for(let i = 0; i < employees.length; i++){
        console.log(`ran ${i} time`);
        response.push(`<div class='card'>
        <div class="card-top">
                <h1 class="name">${employees[i].name}</h1>
                <h1 class="role">${employees[i].getRole()}</h1>
            </div>
            <div class="card-bottom">
                <h3 class="id">${employees[i].id}</h3>
                <h3 class="email">${employees[i].email}</h3>
                <h3 class="officeNumber">${dataCheck(employees[i].officeNumber)}</h3>
                <h3 class="github">${dataCheck(employees[i].github)}</h3>
                <h3 class="school">${dataCheck(employees[i].school)}</h3>
            </div>
        </div>
        `)
    }
    return response
}
function dataCheck (data) {
    if(data) {
        return data
    }else {
        return ''
    }
}
