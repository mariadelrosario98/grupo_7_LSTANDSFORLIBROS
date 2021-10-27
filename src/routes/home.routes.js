const express = require("express")
const router = express.Router()

const path = require("path")

//Página principal
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/index.html"))
})

//Detalles de producto (éste supongo que habrá que cambiarlo en el futuro)
router.get("/product-detail", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/product-detail.html"))
})

//Carrito de compra
router.get("/product-cart", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/product-cart.html"))
})

//Inicio de sesión
router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/login.html"))
})

//Registro
router.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "../views/register.html"))
})

module.exports = router