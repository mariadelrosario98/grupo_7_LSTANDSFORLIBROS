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

//Página de resumen
router.get("/", homeController.productList)

//Página de creación de productos
router.get("/create", homeController.productCreate)
router.post("/", homeController.productStore)

//Página de edición de productos
router.get("/:id/edit", homeController.productEdit)
router.put("/:id", homeController.productUpdate)

//Página de product-deletion
router.delete("/:id", homeController.productDelete)

//Página de detalles de un producto
router.get("/:id", homeController.productDetail)


module.exports = router