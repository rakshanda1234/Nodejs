const express = require("express");
// const routes = require("./routes");

const app = express();

app.use((req, res, next) => {
  console.log(" In the middleware!");
  next(); //allows the request to continues to the next middleware in line
});

app.use((req, res, next) => {
  console.log(" In another middleware!");

  res.send("<h1>hello from Express!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); //shortcut
