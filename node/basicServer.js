const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req);
  if (req.url === "/") {
    res.end("Welcome to our homepage..");
  }
  if (req.url === "/about") {
    res.end("Welcome to our history..");
  }

  res.end(`
    <h1>Oooppss...</h1>
    <p>We can't seem to find teh page you are looking for..</p>
    <a href='/'>Back Home</a>
  `);
});

server.listen(5000);
