const express = require("express");
const app = express();

// listen server req
app.listen(3000);
// route
app.get("/", function (req, res) {
  //   res.send("Hello World");
  res.sendFile("./views/index.html", { root: __dirname });
});
app.get("/about", function (req, res) {
  //   res.send("about");
  res.sendFile("./views/about.html", { root: __dirname });
});

// redirect
app.get("/about-us", function (req, res) {
  // res.send("about");
  res.redirect("/about");
});

// 404 page //set it bottom of the route
app.use((req, res) => {
  res.sendFile("./views/404.html", { root: __dirname });
});
