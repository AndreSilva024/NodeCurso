const os = require('os');

console.log('Sistema operacional:', os.platform()); 
console.log('Versão do SO:', os.version());
console.log('Arquitetura:', os.arch());  
//console.log('Processador:', os.cpus()); 
console.log('Memória total:', os.totalmem());
console.log('Memória livre:', os.freemem()); 
console.log('Diretório home:', os.homedir());  
console.log('Hostname:', os.hostname()); 
console.log(os.type()); 
console.log(os.release()); 