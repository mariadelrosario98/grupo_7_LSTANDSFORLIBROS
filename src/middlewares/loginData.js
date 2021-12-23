const { usersDB } = require("../data")

const login = (req, res, next) => {

  // if (req.cookies)
  //   req.session.user = usersDB.find(element => element.email === req.cookies.email)
  
  res.locals.session = req.session || null

  next()
}


module.exports = login