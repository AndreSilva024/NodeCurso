// Nome

console.log(process.argv); // [ '/usr/bin/node', '/home/runner/2_FUNDAMENTOS/4_ler_argumentos/index.js' ]

const arg = process.argv.slice(2);

console.log(arg);

const nome = arg[0].split("=")[1];

console.log(nome);

const idade = arg[1].split("=")[1];

console.log(idade);

console.log(`Nome: ${nome}, Idade: ${idade}`); 