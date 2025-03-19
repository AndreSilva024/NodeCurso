const chalk = require("chalk");

const nota = 10;

if (nota >= 7) {
  console.log(chalk.green("Aprovado com nota: " + nota));
} else {
  console.log(chalk.red("Reprovado com nota: " + nota));
}
