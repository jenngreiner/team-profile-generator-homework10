const generateHTML = (data) => {
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
                <div class="card" style="width: 18rem;">
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

module.exports = generateHTML;