const { usersModel } = require("../model")

const controller = {
  //* Renderiza el formulario de inicio de sesión
  login: (req, res) => {
    res.status(200).render("users/login")
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
      res.status(500).send(error)
    }
  },


  //* Proceso de inicio de sesión (luego de pasar por el middleware loginCheck)
  signin: async (req, res) => {
    try {
      req.session.user = await usersModel.findUserByEmail(req.body.email)
      res.status(200).redirect("/")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  //* Perfil de usuario
  profile: (req, res) => {
    res.status(200).render("users/profile")
  },

  //* Renderizar formulario de edición de perfil de usuario
  edit: (req, res) => {
    res.status(200).render("users/profile-edit")
  },

  update: async (req, res) => {
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
  signout: (req, res) => {
    req.session.destroy()
    res.clearCookie("email")
    // return res.json(req.session)
    res.redirect("/users/login")
  },
}


module.exports = controller