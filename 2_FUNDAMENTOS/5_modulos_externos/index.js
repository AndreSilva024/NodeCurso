const minimist = require('minimist');

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args['nome'];
const profs = args['profissao'];

console.log(nome, profs);

console.log(`Nome: ${nome}, Profissão: ${profs}`);
