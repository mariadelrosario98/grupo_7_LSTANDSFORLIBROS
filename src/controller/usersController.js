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
    usersModel.addUser(req.body, req.file.filename)
    res.redirect("/")
  },


  //* Proceso de inicio de sesión (luego de pasar por el middleware loginCheck)
  signin: (req, res) => {
    //* Se guarda el usuario en una variable
    let user = usersDB.find(element => element.email === req.body.email)

    //* Aquí se inicia sesión
    req.session.user = user
    req.session.userID = req.body.email
    req.session.admin = user.category === "vendor" ? true : false

    //* Aquí lo estamos redireccionando a la página principal
    console.log(req.body)
    res.redirect("/");
  },


  //* Cierre de sesión
  signout: (req, res) => {
    req.session.destroy()
    res.redirect("/")
  },
}


module.exports = controller