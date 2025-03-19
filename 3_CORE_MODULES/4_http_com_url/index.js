const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  console.log("Request received");

  const urlInfo = require("url").parse(req.url, true);
  const name = urlInfo.query.name;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  if(!name) {
    res.end("<h1>Preencha seu nome:</h1><form method='GET'><input type='text' name='name'/><input type='submit' value='Enviar'></form>");
  }
  else {
    res.end(`<h1>Hello ${name}!</h1><p>My first HTML response</p>`);
  }
});

server.listen(port, () => {
  console.log(`Server is running on port` + port);
});
