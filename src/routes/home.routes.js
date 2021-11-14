const express = require("express")
const router = express.Router()
const multer = require("multer")
const homeController = require("../controller/home.controller")

// Definiendo la carpeta en la que se guardarán los archivos subidos por el usuario
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "public/img/products"
    cb(null, folder)
  },

  filename: (req, file, cb) => {
    let imageName = Date.now() + path.extname(file.originalname)
    cb(null, imageName)
  }
})

let upload = multer({storage: storage})

//Página principal
router.get("/", homeController.index)

//Página de detalles de un producto
router.get("/product-detail/:id", homeController.productDetail)

//Carrito de compra
router.get("/product-cart", homeController.productCart)

//Inicio de sesión
router.get("/login", homeController.login)

//Formulario de registro
router.get("/register", homeController.register)

//Página de creación y edición de productos
router.get("/product-list", homeController.productList)


module.exports = router