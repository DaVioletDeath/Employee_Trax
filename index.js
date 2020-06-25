//I'd recommend starting with your inquirer interface, then getting the database connections working with it.
const inquirer = require("inquirer")

inquirer.prompt([
    {
      type: "list",
      message: "What would you like to select?",
      name: "choice",
      choices: [
          
      ]
    }
  ])