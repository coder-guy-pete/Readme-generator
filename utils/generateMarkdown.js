function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)';
    case 'GNU':
      return '[![License: GNU](https://img.shields.io/badge/License-GNU-blue.svg)](https://www.gnu.org/licenses/)';
    case 'Apache':
      return '[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%20-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';   

    default:
      return '';
  }
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '(https://opensource.org/licenses/MIT)';
    case 'GNU':
      return '(https://www.gnu.org/licenses/)';
    case 'Apache':
      return '(https://opensource.org/licenses/Apache-2.0)';
    case 'ISC':
      return '(https://opensource.org/licenses/ISC)';
    default:
      return '';
  }
}

function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);

  return `## License
  This project is licensed under ${license}. For more information, see ${licenseLink}`;
}

function generateMarkdown(answers) {
  const { title, description, installation, usage, contribution, tests, license, githubUsername, email } = answers;

  const tableOfContents = `
  ## Table of Contents
  * [Description](#description)
  * [Dependencies](#dependencies)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)`;
  
  return `
  ${renderLicenseBadge(license)}
  
  # ${title}

  ## Description
  ${description}

  ## Table of Contents
  ${tableOfContents}

  ## Dependencies
  ${dependencies}

  ## Installation
  ${installation}

  ## Usage
  ${usage}

  ## Contributing
  ${contributing}
  
  ## Tests
  ${tests}
  
  ${renderLicenseSection(license)}

  ## Questions
  **GitHub**: [${githubUsername}](https://github.com/${githubUsername})
  
  For any questions, please contact me at: ${email}`;
}

export default generateMarkdown;
