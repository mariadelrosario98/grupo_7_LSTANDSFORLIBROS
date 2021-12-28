const express = require("express")
const router = express.Router()
const { productsController } = require("../controller")
const { multerUpload, redirects, productErrors, productValidation } = require("../middlewares")

//* Listado de productos
router.get("/", redirects.nonVendor, productsController.list)

//* Creación de productos
router.get("/create", redirects.nonVendor, productsController.create)
router.post("/", multerUpload("products", "product_image").single("product_image"), productsController.store)

//* Edición de productos
router.get("/:id/edit", redirects.nonVendor, productsController.edit)
router.put("/:id", multerUpload("products", "product_image").single("product_image"), productsController.update)

//* Borrado de productos
router.delete("/:id", productsController.delete)

//* Detalles de producto
router.get("/:id", productsController.detail)


module.exports = router