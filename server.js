const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.end("<h1>Hello Node!!!!</h1>\n");
});
server.listen(port, () => {
  console.log(`Server connected on port ${port}`);
});