const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// app.use("/", (req, res, next) => {
//   console.log("This always runs!");
//   next();
// });

app.use("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method = "POST"><input type="text" name="title"><button type = "submit">Add Product</button></form>'
  );
  //next(); //allows the request to continues to the next middleware in line
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  res.send("<h1>hello from Express!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000); //shortcut
