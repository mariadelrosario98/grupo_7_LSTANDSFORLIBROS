const loginCookie = (req, res, next) => {
  if (req.body.remember) {
    res.cookie("email", req.body.email)
    res.cookie("password", req.body.password)
  }
  next()
}

module.exports = loginCookie