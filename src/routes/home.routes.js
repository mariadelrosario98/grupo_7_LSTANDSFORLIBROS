const express = require("express")
const router = express.Router()
const homeController = require("../controller/home.controller")

//Página principal
router.get("/", homeController.index)

//Detalles de producto (éste supongo que habrá que cambiarlo en el futuro)
router.get("/product-detail/:id", homeController.productDetail)

//Carrito de compra
router.get("/product-cart", homeController.productCart)

//Inicio de sesión
router.get("/login", homeController.login)

//Registro
router.get("/register", homeController.register)


module.exports = router