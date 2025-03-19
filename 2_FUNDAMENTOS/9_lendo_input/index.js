const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});


readline.question("qual sua linguagem de programação favorita?", (linguagem) => {
  if (linguagem === "JAVA") {
    console.log("Você está no caminho certo!");
  }else
  console.log(`Sua linguagem favorita é ${linguagem}`);
  readline.close();

})