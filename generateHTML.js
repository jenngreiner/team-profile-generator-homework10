const Employee = require('./lib/Employee')
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML = (team) => {
    const createManager = (manager) => {
        manager.getName();
        manager.getId();
        manager.getEmail();
        manager.getOfficeNumber();
        manager.getRole();
        return `<div class="card" style="width: 18rem;">
        <div class="card-header" id="manager-header">
        <h5 class="card-title"><b>${manager.getName()}</b></h5>
        <p class="card-text">${manager.getRole()}</p>
        </div>
        <div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>ID:</b> ${manager.getId()}</li>
        <li class="list-group-item"><b>Email:</b> ${manager.getEmail()}</li>
        <li class="list-group-item"><b>Office Number:</b> ${manager.getOfficeNumber()}</li>
        </ul>
        </div></div>
        `
    }
    const createEngineer = (engineer) => {
        engineer.getName();
        engineer.getId();
        engineer.getEmail();
        engineer.getGitHub();
        engineer.getRole();
        return `<div class="card " style="width: 18rem;">
        <div class="card-header" id="engineer-header">
        <h5 class="card-title"><b>${engineer.getName()}</b></h5>
        <p class="card-text">${engineer.getRole()}</p>
        </div>
        <div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>ID:</b> ${engineer.getId()}</li>
        <li class="list-group-item"><b>Email:</b> ${engineer.getEmail()}</li>
        <li class="list-group-item"><b>GitHub:</b> ${engineer.getGitHub()}</li>
        </ul>
        </div></div>
        `
    }
    const createIntern = (intern) => {
        intern.getName();
        intern.getId();
        intern.getEmail();
        intern.getSchool();
        intern.getRole();

        return `<div class="card" style="width: 18rem;">
        <div class="card-header" id="intern-header">
        <h5 class="card-title">${intern.getName()}</b></h5>
        <p class="card-text">${intern.getRole()}</p>
        </div>
        <div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>ID:</b> ${intern.getId()}</li>
        <li class="list-group-item"><b>Email:</b> ${intern.getEmail()}</li>
        <li class="list-group-item"><b>School:</b> ${intern.getSchool()}</li>
        </ul>
        </div></div>`
    }

    const cardArray = [];

    // filter to get mgr, int, eng to push cards to this array
    cardArray.push(team.filter(item => item.getRole() === 'Manager').map(newManager => createManager(newManager)));
    cardArray.push(team.filter(item => item.getRole() === 'Engineer').map(newEngineer => createEngineer(newEngineer)));
    cardArray.push(team.filter(item => item.getRole() === 'Intern').map(newIntern => createIntern(newIntern)));

    return cardArray.join('');
};




module.exports = team => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <link rel="stylesheet" href="./Assets/css/style.css">
    
        <title>My Team</title>
    </head>
    
    <body>
        <!-- header -->
        <header>
            <h1>My Team</h1>
        </header>
        <div class="container">
            <div class="row">
                ${generateHTML(team)}
            </div >
        </div >
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script src="./Assets/js/script.js"></script>
    </body>
    </html> `
};