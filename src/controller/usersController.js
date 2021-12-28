const { usersDB } = require("../data");
const { usersModel } = require("../model");

const controller = {
  //* Renderiza el formulario de inicio de sesión
  login: (req, res) => {
    res.render("users/login", {saved: req.cookies})
  },
  

  //* Renderiza el formulario de registro
  register: (req, res) => {
    res.render("users/register")
  },


  //* Registra un usuario en la base de datos
  save: (req, res) => {
    usersModel.addUser(req.body, req.file?.filename)
    res.redirect("/")
  },


  //* Proceso de inicio de sesión (luego de pasar por el middleware loginCheck)
  signin: (req, res) => {
    //* Se inicia sesión
    req.session.user = usersDB.find(element => element.email === req.body.email)

    //* Redireccionando a la página principal
    console.log(req.body)
    res.redirect("/");
  },


  //* Cierre de sesión
  signout: (req, res) => {
    req.session.destroy()
    res.clearCookie("email")
    res.redirect("/users/login")
  },
}


module.exports = controller