const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = (answers) => 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4>My name is ${answers.name}</h1>
                <p class="lead">I am from ${answers.address}</p>
                <h3> Example heading <span class="badge badge-secondary"> Contact Me</span></h3>
    
                <ul class="list-group">
                    <li class="list-group-item">My github username is ${answers.linkedIn}</li>
                    <li class="list-group-item">My github username is ${answers.github}</li>
                </ul>
    
            </div>
        </header>
    </body>
    </html>`; 
     

inquirer
    .prompt([
    {
      type: 'input',
      message: 'What is your Name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your street address?',
      name: 'address',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn profile?',
      name: 'linkedIn',
    },
    {
      type: 'input',
      message: 'What is your Github username?',
      name: 'github',
    },
  ]) 
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
}); 





