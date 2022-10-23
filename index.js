const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("Rakshanda");
    resp.end();
  })
  .listen(4000);
