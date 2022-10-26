const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("Rakshanda");
    resp.end();
    //console.log("Rakshanda");
  })
  .listen(4000);
