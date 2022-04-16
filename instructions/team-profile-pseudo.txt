1. Create file structure based on the readme.md file

2. Build out classes for each of the following:
    - Employee
        -name
        -id
        -email
        -getName()
        -getId()
        -getEmail()
        -getRole() -- return "Employee"
    - Manager
        -officeNumber
        -getRole() -- return "Manager"
    - Engineer
        -github (github username)
        -getGithub()
        -getRole() -- return "Engineer"
    - Intern
        -school
        -getSchool()
        -getRole() -- return "Intern"

3. Import all of your classes and dependencies into the index.js file

4. Create an array to store all of your employees

5. Create function to initialize the app, divide it up based on employee roles

    - All teams need at least one manager -- create a nested function to generate a manager with inquirer prompts
    - Create a new Manager object using the Manager class and the data from the inquirer prompts
    -Push that object to the array of employees

    - Do the same for Intern and Engineers

    - Use a prompt to ask if you'd like to create another employee or finish generating your team -- use conditionals for logic

    - Create a function that stops the inquirer prompts and generates the html page
        -Use fs to write file to dist folder

6. Create a helper function in your src folder to generate HTML file (similar to generateMarkdown in your README generator)
    - Generate employee cards for each type of employee, pass in the data from inquirer prompts
    - Create an array to store the html, and then push html for each employee into the array and return as a string at the end
    -Make sure you're exporting this function and importing it to your index file

Tests
    -A suite of tests for each class in your app