const http = require("./http");

// const server = http.createServer((req, res) => {
//   console.log("Rakshanda");
// });

// server.listen(4000);

http
  .createServer((req, resp) => {
    resp.write("Rakshanda");
    resp.end();
  })
  .listen(4000);
