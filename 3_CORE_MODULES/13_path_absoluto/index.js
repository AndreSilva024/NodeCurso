const path = require('path');

console.log(path.resolve('text.txt')); // /home/andre/Documentos

const midFolder = 'relatorios';
const fileName = 'relatorio.pdf';


const finalPath = path.join('/', 'arquivos', midFolder, fileName);
console.log(finalPath); // /arquivos/relatorios/relatorio.pdf