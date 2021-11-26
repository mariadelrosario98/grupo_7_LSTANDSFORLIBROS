const express = require("express")
const router = express.Router()
const path = require("path")
const { productsController } = require("../controller")

//* Definiendo la carpeta en la que se guardarán los archivos subidos por el usuario
const multer = require("multer")
let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "public/img/products"
    cb(null, folder)
  },

  filename: (req, file, cb) => {
    let imageName = "product-image_" + Date.now() + path.extname(file.originalname) 
    cb(null, imageName)
  }
})

let upload = multer({storage})


//* Listado de productos
router.get("/", productsController.list)

//* Creación de productos
router.get("/create", productsController.create)
const { validate_addProduct } = require("../middlewares/validator")
router.post("/", validate_addProduct, upload.single("product-image"), productsController.store)

//* Edición de productos
router.get("/:id/edit", productsController.edit)
router.put("/:id", upload.single("product-image"), productsController.update)

//* Borrado de productos
router.delete("/:id", productsController.delete)

//* Detalles de producto
router.get("/:id", productsController.detail)


module.exports = router