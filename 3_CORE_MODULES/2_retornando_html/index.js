const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Request received");
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello World!</h1><p>My first HTML response</p>");
});

server.listen(port, () => {
  console.log(`Server is running on port` + port);
});
