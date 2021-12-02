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
    let email = req.body.email
    let password = req.body.password

    let user = usersDB.find(element => element.email === email)
    if (user){
      let check = bcrypt.compareSync(password, user.password)
      if(check){
        //todos Aquí habría que iniciar sesión


        //* Aquí lo estamos redireccionando a la página principal
        res.redirect("/");
      } else {
        //todos Aquí lo estamos redireccionando a la página del formulario con mensaje de error contraseña no cuadra
        res.redirect("/users/login")
      }
    } else {
       //todos Aquí lo estamos redireccionando a la página del formulario con mensaje de error usuario no existe
       res.redirect("/users/login")
    }
  }
}


module.exports = controller