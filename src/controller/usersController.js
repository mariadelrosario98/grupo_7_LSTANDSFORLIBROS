const { usersDB } = require("../data");
const { usersModel } = require("../model");

const controller = {
  //* Renderiza el formulario de inicio de sesión
  login: (req, res) => {
    res.status(200).render("users/login", {saved: req.cookies})
  },
  

  //* Renderiza el formulario de registro
  register: (req, res) => {
    res.status(200).render("users/register")
  },


  //* Registra un usuario en la base de datos
  save: async (req, res) => {
    try {
      await usersModel.addUser(req.body, req.file?.filename)
      res.status(201).redirect("/")
    } catch (error) {
      console.error(error)
      res.status(500).send("500! Error!! Ayayay")
    }
  },


  //* Proceso de inicio de sesión (luego de pasar por el middleware loginCheck)
  signin: (req, res) => {
    //* Se inicia sesión
    req.session.user = usersDB.find(element => element.email === req.body.email)

    //* Redireccionando a la página principal
    console.table(req.body)
    res.status(200).redirect("/");
  },


  //* Cierre de sesión
  signout: (req, res) => {
    req.session.destroy()
    res.clearCookie("email")
    res.redirect("/users/login")
  },
}


module.exports = controller