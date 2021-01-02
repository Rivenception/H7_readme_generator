// function to generate markdown for README

function generateMarkdown(data) {
  let badge = "";
  let licenseLink = "";
  switch(data.license) {
      case "MIT":
          badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          licenseLink = "https://opensource.org/licenses/MIT";
          break;
      case "Apache-2.0":
          badge = "[![License: Apache-2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          licenseLink = "https://opensource.org/licenses/Apache-2.0";
          break;
      case "GPL v3":
          badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
          licenseLink = "https://opensource.org/licenses/GPL-3.0";
          break;
      case "GPL v2":
          badge = "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
          licenseLink = "https://opensource.org/licenses/GPL-2.0";
          break;
      case "BSD 3-Clause":
          badge = "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
          licenseLink = "https://opensource.org/licenses/BSD-3-Clause";
          break;
      case "BSD 2-Clause":
          badge = "[![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
          licenseLink = "https://opensource.org/licenses/BSD-2-Clause";
          break;
      case "LGPL v3":
          badge = "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
          licenseLink = "https://opensource.org/licenses/LGPL-3.0";
          break;
  };

  const README = `
    # ${data.title}

    ${badge}

    ## Description

    ${data.description}

    ## Table of Contents

    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation

    ${data.installation}

    ## Usage

    ${data.usage}

    ## License

    You can find license information [here](${licenseLink})

    ## Contributing

    ${data.contributing}

    ## Tests

    ${data.tests}

    ## Questions

    For any questions you can contact me at ${data.email}

    [![Github](./readme-assets/github.png)](https://github.com/${data.github})

    `;

  return README;
};

module.exports = generateMarkdown;
