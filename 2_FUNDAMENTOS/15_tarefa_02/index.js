const inquirer = require("inquirer");
const chalk = require("chalk");

inquirer
  .prompt([
    {
      name: "p1",
      message: "qual seu nome?",
    },
    {
      name: "p2",
      message: "qual sua idade?",
    },
  ])
  .then((answers) => {

    if (!answers.p1 || !answers.p2) {
       throw new Error("Nome e idade são obrigatórios");
    }
    
    console.log(
      chalk.black.bgYellow(
        "Seu nome é: " + answers.p1 + " e sua idade é: " + answers.p2
      )
    );
  })
  .catch((err) => console.log(err)); // completar com as funções de callback
