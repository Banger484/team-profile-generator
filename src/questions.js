// Questions to gather the manager's information
const addManager = [
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

module.exports = {
    addManager,
    addTeamMember,
    addEngineer,
    addIntern
}