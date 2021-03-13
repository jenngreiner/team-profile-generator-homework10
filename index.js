const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./generateHTML')

// prompt to get manager info
const promptUser = () =>
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter your name.',
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter your email.',
        },
        {
            name: 'id',
            type: 'input',
            message: 'Enter your Employee ID.',
        },
    ])
        .then((data) => {
            fs.writeFileSync('team.html', generate(data));
        })

promptUser();

// // prompt to get role
// const role = inquirer.prompt([
//     {
//         name: 'role',
//         type: 'list',
//         message: 'What is the employees role.',
//         choices: [
//             "Engineer",
//             "Intern",
//             "Manager",
//         ]
//     },
// ])



// // github if engineer
// if (data.role === "Engineer") {
    //     inquire.prompt([
//         {
//             name: 'github',
//             type: 'input',
//             message: 'Enter your GitHub user name.',
//         },
//     ])
//         .then((data) => {
//             console.log(data);
//         })
// } else if
//     // school if intern
//     (data.role === "Intern") {
//     inquire.prompt([
//         {
//             name: 'github',
//             type: 'input',
//             message: 'Enter your GitHub user name.',
//         },
//     ])
//         .then((data) => {
//             console.log(data);
//         })
// } else if (data.role === "Manager") {
//     inquire.prompt([
//         {
//             name: 'office number',
//             type: 'input',
//             message: 'Enter your Office Number.',
//         },
//     ])
//         .then((data) => {
//             console.log(data);
//         })


// // create html page with employee info in cards



