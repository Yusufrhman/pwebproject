function getHome(req, res, next) {
  res.render("shared/index.ejs");
}

module.exports = {
    getHome: getHome,
}
