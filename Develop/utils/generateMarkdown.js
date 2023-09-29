// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(e) {
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
or visit my github at: (https://github.com/${e.github})
# license
Licenced under:
${e.licence} Licence
[![License:${e.licence} ](${ho})](${link})

 
  `
// writeToFile('readme.md', hi)

  return hi;
}

module.exports = generateMarkdown;
