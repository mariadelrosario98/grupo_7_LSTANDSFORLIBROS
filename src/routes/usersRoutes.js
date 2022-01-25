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

//* Perfil Usuario
router.get("/profile", redirects.guest, usersController.profile)

//* Cierre de sesión
router.delete("/", usersController.signout)


module.exports = router