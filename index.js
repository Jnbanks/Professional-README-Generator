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
      message: 'Please describe your project. What does it do, for whom, how and why?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How does someone use your project?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are the contribution guidelines?',
    },
    {
      type: 'input',
      name: 'test',
      message: 'What are the test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What are the test instructions?',
      choices: ['Academic Free License v3.0','Apache license 2.0','Artistic license 2.0','Boost Software License 1.0','Educational Community License v2.0','European Union Public License 1.1','GNU General Public License family','GNU General Public License v3.0','Open Software License 3.0']
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
      console.log(data);
  })