const bcrypt = require("bcryptjs")
const { usersDB } = require("../data");

const loginCheck = (req, res, next) => {
  //* Guardamos las credenciales ingresadas dentro de variables
  let email = req.body.email
  let password = req.body.password
  
  //* Se busca el usuario en la base de datos
  let user = usersDB.find(element => element.email === email)
  
  //* En caso de que no exista el usuario ingresado, se redirige al formulario de login
  if (!user) {
    res.status(400).render("users/login", {message: "Usuario no existe", user: req.body.email})
    return
  }
  
  //* Se verifica si la contraseña es correcta
  let check = bcrypt.compareSync(password, user.password)
  
  //* Si la contraseña es incorrecta, se redirige al formulario de login
  if (!check) {
    res.status(400).render("users/login", {message: "Contraseña incorrecta", user: req.body.email})
    return
  }

  next()
}

module.exports = loginCheck