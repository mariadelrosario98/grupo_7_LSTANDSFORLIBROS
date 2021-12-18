const { usersDB } = require("../data");
const { usersModel } = require("../model");
const bcrypt = require("bcryptjs")

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
    //* Guardamos las credenciales ingresadas dentro de variables
    let email = req.body.email
    let password = req.body.password

    //* Se busca el usuario en la base de datos
    let user = usersDB.find(element => element.email === email)

    //* En caso de que no exista el usuario ingresado, se redirige al formulario de login
    if (!user) {
      res.render("users/login", {message: "Usuario no existe", user: req.body.email})
      return
    }

    //* Se verifica si la contraseña es correcta
    let check = bcrypt.compareSync(password, user.password)

    //* Si la contraseña es incorrecta, se redirige al formulario de login
    if (!check) {
      res.render("users/login", {message: "Contraseña incorrecta", user: req.body.email})
      return
    }

    //* Aquí se inicia sesión
    req.session = user
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