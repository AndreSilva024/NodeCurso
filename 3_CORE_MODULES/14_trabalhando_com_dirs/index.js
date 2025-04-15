const fs = require('fs');

if (!fs.existsSync('./minha_pasta')) {
    console.log('Pasta não existe, criando...');
    fs.mkdir('./minha_pasta', (err) => {
        if (err) {
            console.log('Erro ao criar a pasta', err);
        } else {
            console.log('Pasta criada com sucesso!');
        }
    });
}else {
    console.log('Pasta já existe!');
}