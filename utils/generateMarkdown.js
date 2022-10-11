// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''
  } else if (license === 'MIT License') {
    return '<img src="https://img.shields.io/badge/licence-MIT-green">'
  } else if (license === 'Apache License 2.0') {
    return '<img src="https://img.shields.io/badge/licence-Apache%20License%202.0-blue">'
  } else if (license === 'Mozilla Public License 2.0') {
    return '<img src="https://img.shields.io/badge/licence-Mozilla%20Public%20License%202.0-orange">' 
  } else {
    return 'Something has gone terribly wrong with our license.'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return ''
  } else if (license === 'MIT License') {
    return 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache License 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'Mozilla Public License 2.0') {
    return 'https://www.mozilla.org/en-US/MPL/2.0/' 
  } else {
    return 'Oh no it looks like the link to our license isn\'t working properly.'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '' 
  } else if (license === 'MIT License') {
    return 'MIT License is the best'
  } else if (license === 'Apache License 2.0') {
    return 'Actually the Apache License 2.0'
  } else if (license === 'Mozilla Public License 2.0') {
    return 'They cant be! Mozilla Public License 2.0 is the best' 
  } else {
    return 'Sorry about this. The section we had prepared for our license has gone missing. We will put out a missing section report soon!'
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

${renderLicenseBadge(data.license)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage} 

## Contribution

${data.contribution}

## Tests

${data.tests}

## License

This project is covered under the ${data.license} which you can read in depth here ${renderLicenseLink(data.license)}
    
${renderLicenseSection(data.license)}

## Questions

Frequently asked questions will be listed here. 

If you do have any questions feel free to get in contact with me on Github! https://github.com/${data.github}

Or if you would like to contact me via email you can do so by emailing your question to ${data.email}
`;
}

module.exports = generateMarkdown;
