const express = require("express")
const router = express.Router()
const { usersController } = require("../controller")
const { multerUpload, redirectUser } = require("../middlewares")


//* Inicio de sesión
router.get("/login", redirectUser, usersController.login)

const { loginCheck, loginCookie } = require("../middlewares")
router.post("/login", loginCheck, loginCookie, usersController.signin)

//* Registro
router.get("/register", redirectUser, usersController.register)
router.post("/register", multerUpload("users", "profile-pic").single("profile-pic"), usersController.save)

//* Cierre de sesión
router.delete("/", usersController.signout)

module.exports = router