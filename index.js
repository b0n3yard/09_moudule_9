// TODO: Include packages needed for this application
const fs = require('fs');
// import inquirer from 'inquirer';
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [];
function writedata(e,ho){
        const link = getlink(e.licence)
        const hi = `
# ${e.title} [![License:${e.licence} ](${ho})](${link})
# Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#Credits)
- [Testing](#testing)
- [Questions](#Questions)
- [License](#license)
# Description
${e.description}
# installation
${e.install}
# usage    
${e.usage}
# Credits
${e.contrabutions}
# testing
${e.tests}
# Questions
contact me at: [${e.questions}](mailto:${e.questions})
or visit my github at: https://github.com/${e.github}
# license
Licenced under:
${e.licence}
[![License:${e.licence} ](${ho})](${link})

       
        `
    writeToFile('samplereadme.md', hi)
    
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        if(err) throw err;
        
       
        
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
    {
        name: 'title',
        message:'Enter Title?'

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
},
{
        name:'contrabutions',
        message:' type out any collaborators'
},
{
        name:'tests',
        message: 'type out any testing instructions'
},
{
        name: 'questions',
        message: 'type your email address'
},
{
        name: 'github',
        message: 'type the name of your github account'
},
{
        name: 'licence',
        message:'what licence?',
        type: 'list',
        choices:[{
            name:'gnu',
            value: 'GNU'
        },
    {
        name:'mit',
        value: 'MIT'
    },
    {
        name: 'isc',
        value:'ISC'
    },
{
        name: 'mozilla',
        value: 'Mozilla'

},
{
        name: 'wtfpl',
        value: 'WTFPL'

},
{
        name: 'no licence',
        value: 'none'
}]
}
 ]).then((e) =>{
        if(e.licence === 'GNU'){
            return getgnulicence().then((gnue) =>{
               

                const ho = getbadge(e.licence, gnue.gnu)
                e.licence = gnue.gnu
                writedata(e,ho);
            })
        }
        
        const ho = getbadge(e.licence)
        writedata(e,ho);
    })

}
function getgnulicence(){
   
    return inquirer.prompt({

        name: 'gnu',
        message: 'choose gnu licence type',
        type: 'list',
        choices: ['GPL_v3','GPL_v2','AGPL_v3','LGPL_v3', 'FDL_v1.3']
    })
}
function getbadge( e,badge){
    switch(e){
        case 'none':
            return ''
        case 'MIT':
            return 'https://img.shields.io/badge/License-MIT-yellow.svg';
        case 'ISB':
            return 'https://img.shields.io/badge/License-ISC-blue.svg'
        case 'GNU':
            return 'https://img.shields.io/badge/License-'+badge+'-blue.svg'
        case 'Mozilla':
            return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
        case 'WTFPL':
            return 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg'
    
    }
}
function getlink(e){
    switch(e){
        case 'none':
            return ''
        case 'MIT':
            return 'https://opensource.org/licenses/MIT';
        case 'ISC':
            return 'https://opensource.org/licenses/ISC'
        case 'GPL_v3':
            return 'https://www.gnu.org/licenses/gpl-3.0'
            case 'GPL_v2':
                return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
        case 'AGPL_v3':
            return 'https://www.gnu.org/licenses/agpl-3.0'
        case 'LGPL_v3':
            return 'https://www.gnu.org/licenses/lgpl-3.0'
        case 'FDL_v1.3':
            return 'https://www.gnu.org/licenses/fdl-1.3'
        case 'Mozilla':
            return 'https://opensource.org/licenses/MPL-2.0'
        case 'WTFPL':
            return 'http://www.wtfpl.net/about/'
}
}
// Function call to initialize app
init();
