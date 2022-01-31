const http = require("http");
const fs = require("fs");
const _ = require("lodash");
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);

  // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = () => {
    console.log("hello dear");
  };

  greet();
  greet();
  // set header content type
  res.setHeader("Content-Type", "text/html");
  // send normal text
  // res.write("<h4>hello from jerald world</h4>");

  // route
  let path = "./views/";

  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    // redirect
    case "/about-mee":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      res.end();
      break;

    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  // send an html
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
