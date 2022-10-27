const http = require("http");
const fs = require("fs");
const path = require("path");

const { buffer } = require("stream/consumers");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  const body = [];

  if (url === "/") {
    fs.readFile("message.txt", { encoding: "utf-8" }, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(`data from file` + data);

      res.write("<html>");
      res.write("<head><title>My First Page</title></head>");
      res.write("<body>${data}</body>");
      res.write(
        '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></button></body>'
      );
      res.write("</html>");
      return res.end();
    });
  } else if (url === "/message" && method === "POST") {
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    return req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log("parsebody>>>>>>", parseBody);
      const message = parseBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        if (err) {
          console.log(err);
        }
        console.log("inside fs-writefile");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write("<body><h1>Hello from my Node.js Server!</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(8000);
