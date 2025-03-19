const { cp } = require('fs');
const url = require('url');
const address = 'http://localhost:3000/catalog?products=car';
const parsedUrl = new url.URL(address);

console.log(parsedUrl.protocol);
console.log(parsedUrl.host);
console.log(parsedUrl.pathname);
console.log(parsedUrl.search);
console.log(parsedUrl.searchParams);
console.log(parsedUrl.searchParams.get('products'));