const fs = require('fs');
const path = require('path')
const bcrypt = require('bcryptjs')
const { usersModel } = require("../model")

const controller = {
  // Renderiza el formulario de inicio de sesión
  login(req, res) {
    res.status(200).render("users/login")
  },


  // Renderiza el formulario de registro
  register(req, res) {
    res.status(200).render("users/register")
  },


  // Registra un usuario en la base de datos
  async save(req, res) {
    try {
      await usersModel.addUser(req.body)
      res.status(200).redirect("/users/login")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  // Proceso de inicio de sesión (luego de pasar por el middleware loginCheck)
  async signin(req, res) {
    try {
      let email = req.body.email
      let user = await usersModel.getUserBy({email})
      user.password = null
      req.session.user = user
      req.session.user.password = null
      res.status(200).redirect("/users/profile")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  // Perfil de usuario
  profile(req, res) {
    res.status(200).render("users/profile")
  },


  // Renderizar formulario de edición de perfil de usuario
  edit(req, res) {
    res.status(200).render("users/profile-edit")
  },


  changePass(req, res) {
    res.status(200).render("users/password-edit")
  },


  async update(req, res) {
    let id = req.session.user.id
    let user = req.body;
    try {
      await usersModel.editUser(id, user)
      req.session.user = await usersModel.getUserBy({id})
      req.session.user.password = null
      res.status(200).redirect("/users/profile")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  // Actualiza la foto de perfil
  updatePic: async (req, res) => {
    let id = parseInt(req.session.user.id)
    let img_path = req.file?.filename

    try {
      let user = await usersModel.getUserBy({id})
      let fullPath = path.resolve(__dirname, "../../public/img/users", user.img_path)
      if (user.img_path && user.img_path !== "default.png" && fs.existsSync(fullPath))
        fs.rm(fullPath, {}, err => console.error(err))
      
      await usersModel.editUser(id, { img_path })
      req.session.user.img_path = img_path
      res.status(201).redirect("/users/profile")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  // Actualizar contraseña
  async updatePass(req, res) {
    let id = req.session.user.id
    let password = bcrypt.hashSync(req.body.new_password, 10)
    try {
      await usersModel.editUser(id, { password })
      res.status(200).redirect("/users/profile")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  // Cierre de sesión
  signout(req, res) {
    req.session.destroy()
    res.clearCookie("email")
    // return res.json(req.session)
    res.redirect("/users/login")
  },
}


module.exports = controller