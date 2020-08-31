
function generateMarkdown(data) {
    return `

  ### **${data.title}**

  ## Description 

  ${data.description}

  ## Table of contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributors](#Contributors)
  - [Test](#Test)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ![License](https://img.shields.io/badge/LICENSE-${data.license}-GREEN)

  ## Contributors

  ${data.contributing}

  ## Test

  ${data.test}
  
  ## Questions

  For questions contact ${data.email}.
  GitHub URL: https://api.github.com/users/${data.username}
  `;
  }
  
  module.exports = generateMarkdown;