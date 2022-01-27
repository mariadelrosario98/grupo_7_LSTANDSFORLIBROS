const redirects = {
  guest: (req, res, next) => req.session.user ? next() : res.status(401).redirect("/users/login"),
  user: (req, res, next) => req.session.user ? res.redirect("/users/profile") : next(),
  nonVendor: (req, res, next) => req.session.user.category === "vendor" ? next() : res.status(401).redirect("/"),
}


module.exports = redirects