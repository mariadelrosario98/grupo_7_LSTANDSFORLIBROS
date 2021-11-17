const express = require("express")
const router = express.Router()
const multer = require("multer")
const { productsController } = require("../controller")

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

//* Página de resumen
router.get("/", productsController.list)

//* Página de creación de productos
router.get("/create", productsController.create)
router.post("/", productsController.store)

//* Página de edición de productos
router.get("/:id/edit", productsController.edit)
router.put("/:id", productsController.update)

//* Página de product-deletion
router.delete("/:id", productsController.delete)

//* Página de detalles de un producto
router.get("/:id", productsController.detail)


module.exports = router