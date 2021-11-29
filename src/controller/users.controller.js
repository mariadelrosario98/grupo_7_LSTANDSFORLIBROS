const { usersDB } = require("../data");
const { usersModel } = require("../model");
const bcrypt = require("bcryptjs")

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
  },
  signin: (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    let findEmail = usersDB.find(element => element.email === email);
    if (findEmail){
      let check = bcrypt.compareSync(password, findEmail.password)
      if(check){
        //todos Aquí habría que iniciar sesión


        //* Aquí lo estamos redireccionando a la página principal
        res.redirect("/");
      }
      else{
        //todos Aquí lo estamos redireccionando a la página del formulario con mensaje de error contraseña no cuadra
        res.redirect("/users/login")
      }
    }
    else{
       //todos Aquí lo estamos redireccionando a la página del formulario con mensaje de error usuario no existe
       res.redirect("/users/login")
    }
  }
}


module.exports = controller