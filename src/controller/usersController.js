const { usersModel } = require("../model")

const controller = {
  //* Renderiza el formulario de inicio de sesión
  login: function(req, res) {
    res.status(200).render("users/login")
  },


  //* Renderiza el formulario de registro
  register: function(req, res) {
    res.status(200).render("users/register")
  },


  //* Registra un usuario en la base de datos
  save: async function(req, res) {
    try {
      await usersModel.addUser(req.body, req.file?.filename)
      res.status(201).redirect("/")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  //* Proceso de inicio de sesión (luego de pasar por el middleware loginCheck)
  signin: async function(req, res) {
    try {
      req.session.user = await usersModel.findUserByEmail(req.body.email)
      res.status(200).redirect("/users/profile")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  //* Perfil de usuario
  profile: function(req, res) {
    res.status(200).render("users/profile")
  },


  //* Renderizar formulario de edición de perfil de usuario
  edit: function(req, res) {
    res.status(200).render("users/profile-edit")
  },


  changePass: function(req, res) {
    res.status(200).render("users/password-edit")
  },


  update: async function(req, res) {
    let id = req.session.user.id
    let user = req.body;
    try {
      await usersModel.editUser(id, user)
      res.status(200).redirect("/users/profile")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },

  
  //* Cierre de sesión
  signout: function(req, res) {
    req.session.destroy()
    res.clearCookie("email")
    // return res.json(req.session)
    res.redirect("/users/login")
  },
}


module.exports = controller