const fs = require('fs');
const inquirer = require('inquirer');

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
        <h1>${}</h1>
        <h2>${}</h2>
        <h3>${}</h3>
        <h3>${}</h3>
    </header>
</body>
</html>`; 

const promptUser = () => {
    {
        type: 'input',
        message: 'What is your Name?',
        name: 'username',
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
        name: 'Github',
    },
}

const init = () => {
    promptUser()
    .then((response) => writeFileAsync("index.html", gernateHTML(response)))
    .then(() => console.log("successful"))
    .catch((err) => console.log(err))
}

init(); 
  


