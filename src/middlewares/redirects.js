const redirects = {
  guest: (req, res, next) => req.session.user ? next() : res.status(401).redirect("/users/login"),
  user: (req, res, next) => req.session.user ? res.redirect("/") : next(),
  nonVendor: (req, res, next) => req.session.admin ? next() : res.redirect("/"),
}

module.exports = redirects