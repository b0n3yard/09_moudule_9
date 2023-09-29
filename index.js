// TODO: Include packages needed for this application
const fs = require('fs');
// import inquirer from 'inquirer';
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];
function writedata(e){
        const hi = `
# ${e.title}
# Table of Contents
- [Installation](#installation-instructions)
- [Usage](#usage-information)
- [Credits](#contribution-guidelines)
- [Testing](#test-instructions)
- [License](#license)
# Description
${e.description}
# installation instructions
${e.install}
# usage information    
${e.usage}
# contribution guidelines
# test instructions
#license
       
        `
    writeToFile('readme.md', hi)
    
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, (err) =>{
        if(err) throw err;
        
        console.log('hello')
        
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([{
        name: 'title',
        message:'hello?'

    },
    {
        name:'description',
        message: 'write description'
   },
{
        name: 'install',
        message: 'type out installation instuctions'
},
{
        name: 'usage',
        message: 'type out usage instuctions'
}
 ]).then((e) =>{

        console.log(e.title);
        console.log(e.description);
        writedata(e);
    })
    
   
    



}

// Function call to initialize app
init();
