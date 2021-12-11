const express = require("express")
const router = express.Router()

const { homeController } = require("../controller")


//* Página principal
router.get("/", homeController.index)

//* Carrito de compra
router.get("/product-cart", homeController.cart)


module.exports = router