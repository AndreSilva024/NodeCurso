const fs =require('fs');
console.log('Start');

fs.writeFileSync('sync.txt','Hello, Node.js!');
console.log(fs.readFileSync('sync.txt','utf-8'));

console.log('End');