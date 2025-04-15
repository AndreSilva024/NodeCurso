const path = require('path');

const customPath = "/relatorio/duarte/relatorio1.pdf"

console.log("Nome do arquivo:", path.basename(customPath)); // relatorio1.pdf
console.log("Nome do diretório:", path.dirname(customPath)); // /relatorio/duarte
console.log("Extensão do arquivo:", path.extname(customPath)); // .pdf