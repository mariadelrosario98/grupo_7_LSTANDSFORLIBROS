const { usersDB } = require("../data");
const { usersModel } = require("../model")

const controller = {
  login: (req, res) => {
    res.render("users/login")
  },
  
  register: (req, res) => {
    res.render("users/register")
  },

  save: (req, res) => {
    // res.send(req.file)
    usersModel.addUser(req.body, req.file.filename)
    // res.send(usersDB)
    
    res.redirect("/")
  }
}


module.exports = controller