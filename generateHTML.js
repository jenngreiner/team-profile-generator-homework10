const generateHTML = (data) => {
    return `
                    <div class="card-header">
                        <h5 class="card-title">${data.name}</h5><img src="..." class="card-img-top" alt="...">
                        <p class="card-text">${data.role}</p>
                    </div >
    <div class="card-body">
        <div class="card" style="margin: auto;">
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${data.id}</li>
                <li class="list-group-item">Email: ${data.email}</li>
                <li class="list-group-item">GitHub: ${data.github}</li>
                <li class="list-group-item">Office Number: ${data.officeNumber}</li>
                <li class="list-group-item">School: ${data.school}</li>
            </ul>
        </div>
    </div>
                </div >
            </div >
        </div >
        <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
        <script src="./Assets/js/script.js"></script>
    
    
    </body >
    
    </html > `}



const createManager = (manager) => {
    manager.getName();
    manager.getId();
    manager.getEmail();
    manager.getOfficeNumber();
    manager.getRole();
    `
    `
}
const createEngineer = (engineer) => {
    engineer.name;
    engineer.id;
    engineer.email;
    engineer.getOfficeNumber();
    `
    `
}
const createIntern = (intern) => {
    intern.name;
    intern.id;
    intern.email;
    intern.getOfficeNumber();

}

cardArray = [];

// filter to get mgr, int, eng to push cards to this array
cardArray.push(team.filter(employee => Employee.getRole() === 'Manager').map(newManager => createManager(newManager)).join(''));
cardArray.push(team.filter(employee => Employee.getRole() === 'Intern').map(newIntern => createIntern(newIntern)).join(''));
cardArray.push(team.filter(employee => Employee.getRole() === 'Engineer').map(newEngineer => createEngineer(newEngineer)).join(''));



return cardArray.join('');

module.exports = team => {
    `<!DOCTYPE html>
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
                <div class="card" style="width: 18rem;">${generateHTML(team)}`
};