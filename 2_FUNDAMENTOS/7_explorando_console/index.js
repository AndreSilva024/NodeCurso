// mais de um valor

const nome = 'Rafael';
const idade = 30;
const array = [1,2,3,4,5];     

console.log(nome, idade, array); 

//contagem de impresoes

for (let i = 0; i < 10; i++) {
    console.count(`contador ${nome}`);

}

//varivel entre string

console.log('O nome é %s e a idade é %d', nome, idade);

//limpar console
setTimeout(() => {
    console.clear();
}, 2000);