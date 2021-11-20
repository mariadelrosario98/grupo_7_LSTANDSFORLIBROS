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
    let imageName = file.fieldname + "_" + Date.now() + path.extname(file.originalname) 
    cb(null, imageName)
  }
})

let upload = multer({storage: storage})


//* Página de resumen
router.get("/", productsController.list)

//* Página de creación de productos
router.get("/create", productsController.create)
router.post("/", upload.single("product_image"),productsController.store)

//* Página de edición de productos
router.get("/:id/edit", productsController.edit)
router.put("/:id", upload.single("product_image"), productsController.update)

//* Página de product-deletion
router.delete("/:id", productsController.delete)

//* Página de detalles de un producto
router.get("/:id", productsController.detail)


module.exports = router