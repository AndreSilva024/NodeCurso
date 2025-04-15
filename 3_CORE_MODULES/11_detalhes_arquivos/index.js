const fs = require('fs');


fs.stat('pasta', (err, stats) => {
    if (err) {
        console.error('Erro ao obter informações do arquivo:', err);
        return;
    }

    console.log('Informações do arquivo:');
    console.log(stats.isDirectory() ? 'É um diretório' : 'É um arquivo');
    console.log(stats.isFile() ? 'É um arquivo' : 'É um diretório');
    console.log(stats.isSymbolicLink() ? 'É um link simbólico' : 'Não é um link simbólico');
    console.log('Tamanho do arquivo:', stats.size, 'bytes');
    console.log('Criado em:', stats.birthtime);
    console.log('Última modificação:', stats.mtime);
    console.log('Último acesso:', stats.atime);
})