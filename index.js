const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateHTML')
const util = require('util')
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');

let team = []

// function to add engineer
const promptEngineer = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the employee name.',
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter the employee email.',
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter the employee ID.',
        },
        {
            name: 'github',
            type: 'input',
            message: 'Enter your GitHub user name.',
        },
        {
            name: 'addEmployee',
            type: 'confirm',
            message: 'Do you want to add another employee?',
        },
    ]).then((data) => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        team.push(engineer);
        if (data.addEmployee === true) {
            promptNewEmployee();
        } else {
            console.log(team);
            createFile(team)
        }
    })
}

// function to add intern 
const promptIntern = () => {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the employee name.',
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter the employee email.',
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter the employee ID.',
        },
        {
            name: 'school',
            type: 'input',
            message: 'Enter the employee school.',
        },
        {
            name: 'addEmployee',
            type: 'confirm',
            message: 'Do you want to add another employee?',
        },
    ]).then((data) => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        team.push(intern);
        if (data.addEmployee === true) {
            promptNewEmployee();
        } else {
            console.log(team);
            createFile(team)
        }
    })
}

// function to prompt for adding another employee and calling the correct prompts for the employee type
const promptNewEmployee = () => {

    const promptRole = inquirer.prompt([
        {
            name: 'role',
            type: 'list',
            message: 'What is the employees role.',
            choices: [
                "Engineer",
                "Intern",
            ]
        },
    ]).then((data) => {
        // call function for the right type of employee
        if (data.role === 'Engineer') {
            promptEngineer();
        } else if (data.role === 'Intern') {
            promptIntern();
        }
    })
}

// function to create HTML
const createFile = () => {
    fs.writeFileSync('team.html', generate(team));
}

// prompt to get manager info
const promptManager = () =>
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the employee manager name.',
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter the employee manager email.',
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter the employee manager ID.',
        },
        {
            name: 'officeNumber',
            type: 'input',
            message: 'Enter the employee manager office number.',
        },
        {
            name: 'addEmployee',
            type: 'confirm',
            message: 'Do you want to add another employee?',
        },
    ]).then((data) => {
        // send manager data to manager class constructor
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        team.push(manager);
        // if they said yes, prompt engineer or intern
        if (data.addEmployee === true) {
            promptNewEmployee();
        } else {
            console.log(team);
            createFile(team)
        }
    })

promptManager();
// TODO write html