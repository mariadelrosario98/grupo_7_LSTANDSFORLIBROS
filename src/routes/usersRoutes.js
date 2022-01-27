const express = require("express")
const router = express.Router()
const { usersController } = require("../controller")
const { multerUpload, redirects, userErrors, validation } = require("../middlewares")

//* Inicio de sesión
router.get("/login", redirects.user, usersController.login)

const { loginCheck, loginCookie } = require("../middlewares")
router.post("/login", loginCheck, loginCookie, usersController.signin)

//* Registro
router.get("/register", redirects.user, usersController.register)
router.post("/register", multerUpload("users", "profile_pic").single("profile_pic"), userErrors, validation("users", "register"), usersController.save)

//* Perfil de usuario
router.get("/profile", redirects.guest, usersController.profile)

//* Edición de usuario
router.get("/profile/edit", redirects.guest, usersController.edit)
router.post("/profile/edit", usersController.update)

//* Cambio de contraseña
router.get("/profile/password", redirects.guest, usersController.changePass)
// router.post("/profile/password", usersController.updatePass)

//* Cierre de sesión
router.delete("/", usersController.signout)

//? Pruebas
router.get("/all", (req, res) => {
  const { usersModel } = require('../model')
  usersModel.getAllUsers().then(users => res.json(users))
})


module.exports = router