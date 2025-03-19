const http = require('http')
const port = 3000;

const server = http.createServer((req, res) => {

    console.log('Request received');    
    res.write('Hello World!');
    res.end();

});

server.listen(port, () => {

    console.log(`Server is running on port` + port);

}
)
