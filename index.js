const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please describe your project. Think what, how and why?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How do you use your project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'How do you test it?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does it have?',
      choices: ['Apache license 2.0','Boost Software License 1.0','BSD 3-Clause License','GNU General Public License v3.0','The MIT License','Mozilla Public License 2.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
  ])
  .then((data) => {
    
    function badge(data) {
        const linenseType = data.license;
        let licenseString = '';
        if (linenseType === 'Apache license 2.0') {
            licenseString = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`
        };
        if (linenseType === 'Boost Software License 1.0') {
            licenseString = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`
        };
        if (linenseType === 'BSD 3-Clause License') {
            licenseString = `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)`
        };
        if (linenseType === 'GNU General Public License v3.0') {
            licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
        };
        if (linenseType === 'The MIT License') {
            licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
        };
        if (linenseType === 'Mozilla Public License 2.0') {
            licenseString = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`
        };
        return licenseString;
    };
    
    const readme =
`# ${data.title}
    
## Description
    
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#test)
6. [Questions](#questions)
    
## Installation
${data.installation}

## Usage
${data.usage}
    
## License
${badge(data)}
    
## Contributing
${data.contributing}
    
## Tests
${data.test}
    
## Questions
https://github.com/${data.github}
${data.email}`;
        
    fs.writeFile('Output/README.md', readme, (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  })
  
//}