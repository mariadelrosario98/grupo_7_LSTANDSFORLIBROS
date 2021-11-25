const express = require("express")
const router = express.Router()
const path = require("path")
const { usersController } = require("../controller")

//* Definiendo la carpeta en la que se guardarán los archivos subidos por el usuario
const multer = require("multer")
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "public/img/users"
    cb(null, folder)
  },

  filename: (req, file, cb) => {
    let imageName = file.fieldname + "_" + Date.now() + path.extname(file.originalname) 
    cb(null, imageName)
  }
})

let upload = multer({storage})


//* Inicio de sesión
router.get("/login", usersController.login)

//* Registro
router.get("/register", usersController.register)
router.post("/", upload.single("profile-pic"), usersController.save)


module.exports = router