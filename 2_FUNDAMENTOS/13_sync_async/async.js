const fs = require('fs');

console.log('Start');

fs.writeFile('async.txt', 'Hello, Node.js!', function(err) {
    setTimeout(function(){
        console.log("arquivo escrito");

    },1000)});

    console.log('End');
