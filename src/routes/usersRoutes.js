const express = require("express")
const router = express.Router()
const { usersController } = require("../controller")
const { multerUpload } = require("../middlewares")

//* Definiendo la carpeta en la que se guardarán los archivos subidos por el usuario
// const multer = require("multer")
// let storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     let folder = "public/img/users"
//     cb(null, folder)
//   },

//   filename: (req, file, cb) => {
//     let imageName = "profile-pic_" + Date.now() + path.extname(file.originalname) 
//     cb(null, imageName)
//   }
// })

// let upload = multer({storage})


//* Inicio de sesión
router.get("/login", usersController.login)

const { loginCheck } = require("../middlewares")
router.post("/login", loginCheck, usersController.signin)

//* Registro
router.get("/register", usersController.register)
router.post("/register", multerUpload("users", "profile-pic").single("profile-pic"), usersController.save)


module.exports = router