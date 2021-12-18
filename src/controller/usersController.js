const { usersDB } = require("../data");
const { usersModel } = require("../model");

const controller = {
  //* Renderiza el formulario de inicio de sesión
  login: (req, res) => {
    res.render("users/login")
  },
  
  //* Renderiza el formulario de registro
  register: (req, res) => {
    res.render("users/register")
  },

  //* Registra un usuario
  save: (req, res) => {
    // res.send(req.file)
    usersModel.addUser(req.body, req.file.filename)
    // res.send(usersDB)
    
    res.redirect("/")
  },

  //* Proceso de inicio de sesión
  signin: (req, res) => {
    //* Se guarda el usuario en una variable
    let user = usersDB.find(element => element.email === req.body.email)

    //* Aquí se inicia sesión
    // req.session = {...user}
    req.session.userID = req.body.email
    req.session.admin = user.category === "vendor" ? true : false
    // return res.send(req.session)

    //* Aquí lo estamos redireccionando a la página principal
    console.log("Todo bien")
    res.redirect("/");
  },

  //* Cierre de sesión
  signout: (req, res) => {
    req.session.destroy()
    res.redirect("/")
  },
}


module.exports = controller