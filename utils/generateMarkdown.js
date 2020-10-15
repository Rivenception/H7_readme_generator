// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}

${badge}

## Description

-------
${data.description}
-------

## Table of Contents

-------
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
-------

## Installation

-------
${data.installation}
-------

## Usage

-------
${data.usage}
-------

## License

-------

-------

## Contributing

-------
${data.contributing}
-------

## Tests

-------
${data.tests}
-------

## Questions

-------
For any questions you can contact me at ${data.email}

Github: [https://github.com/${data.github}]
-------

`;
}

module.exports = generateMarkdown;
