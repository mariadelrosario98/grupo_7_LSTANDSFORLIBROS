const express = require("express")
const router = express.Router()
const { productsController } = require("../controller")
const { multerUpload, redirects, productErrors, validation } = require("../middlewares")

//* Listado de productos
router.get("/", redirects.nonVendor, productsController.list)

//* Creación de productos
router.get("/create", redirects.nonVendor, productsController.create)
router.post("/", productErrors, validation("products", "create"), productsController.store)

//* Edición de productos
router.get("/:id/edit", redirects.nonVendor, productsController.edit)
router.put("/:id", productErrors, validation("products", "edit"), productsController.update)

//* Edición de imagen de productos
router.put("/:id/edit", multerUpload("products", "product_img").single("product_img"), productsController.updatePic)

//* Borrado de productos
router.delete("/:id", productsController.delete)

//* Detalles de producto
router.get("/:id", productsController.detail)


module.exports = router