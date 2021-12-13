const auth = (req, res, next) => {
  if (req.session) {
    next()
  } else {
    res.status(401).redirect("/users/login")
  }
}

module.exports = auth