const http = require("http");
const fs = require("fs");
const port = 3000;

const server = http.createServer((req, res) => {
 fs.readFile("mensagem.html", (err, data) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data)
    res.end()
 })

});

server.listen(port, () => {
    console.log(`Server is running on port` + port);
});
