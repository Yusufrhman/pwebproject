const express = require("express");

const app = express();

const path = require("path");

const baseRoutes = require("./routes/base.routes")

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use("/assets", express.static("web-data"));

app.use(express.urlencoded({ extended: false }));

app.use(baseRoutes)

app.use(function (req, res) {
  res.status(404).render("shared/404");
});

app.listen(3000);
