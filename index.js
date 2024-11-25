import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

const questions = [
    {message: 'What is the title of your project?', type: 'input', name: 'title'},
    {message: 'Please provide a description of your project.', type: 'input', name: 'description'},
    {message: 'What are the installation instructions for your project?', type: 'input', name: 'installation'},
    {message: 'What is the usage information for your project?', type: 'input', name: 'usage'},
    {message: 'What are the contribution guidelines for your project?', type: 'input', name: 'contribution'},
    {message: 'What are the test instructions for your project?', type: 'input', name: 'tests'},
    {message: 'What license would you like to use for your project?', type: 'list', name: 'license', choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None']},
    {message: 'What is your GitHub username?', type: 'input', name: 'githubUsername'},
    {message: 'What is your email address?', type: 'input', name: 'email'}
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err);
        } else {
            console.log('File written successfully!');
        }
    });
}

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('README.md', markdownContent);   
        })
    .catch(err => {
        console.error('Error:', err);
    });
}

init();
