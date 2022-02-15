const express = require("express")
const router = express.Router()
const { usersController } = require("../controller")
const { multerUpload, redirects, errors, validation, loginCookie } = require("../middlewares")

// Inicio de sesión
router.get("/login", redirects.user, usersController.login)
router.post("/login", errors.login, validation("users/login"), loginCookie, usersController.signin)

// Registro
router.get("/register", redirects.user, usersController.register)
router.post("/register", errors.register, validation("users/register"), usersController.save)

// Perfil de usuario
router.get("/profile", redirects.guest, usersController.profile)

// Edición de usuario
router.get("/profile/edit", redirects.guest, usersController.edit)
router.put("/profile/edit", errors.editUser, validation("users/profile-edit"), usersController.update)

// Cambio de foto de perfil
router.put("/profile", 
  multerUpload("users", "profile_pic").single("profile_pic"),
  errors.pic("profile_pic"),
  validation("users/profile"),
  usersController.updatePic
)

// Cambio de contraseña
router.get("/profile/password", redirects.guest, usersController.changePass)
router.put("/profile/password", errors.password, validation("users/password-edit"), usersController.updatePass)

// Cierre de sesión
router.delete("/", usersController.signout)

//? Pruebas
router.get("/all", (req, res) => {
  const { usersModel } = require('../model')
  usersModel.getAllUsers().then(users => res.json(users))
})


module.exports = router