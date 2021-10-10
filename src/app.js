const express = require("express")
const app = express()
const path = require("path")

let port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "./public")))

//Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/index.html"))
})

//Detalles de producto (éste supongo que habrá que cambiarlo en el futuro)
app.get("/productDetail", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/productDetail.html"))
})

//Carrito de compra
app.get("/productCart", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/productCart.html"))
})

//Inicio de sesión
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"))
})

//Registro
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"))
})


//FAVOR NO AGREGAR CÓDIGO DEBAJO DE ESTA LINEA
app.listen(port, () => console.log("Servidor corriendo en el puerto", port))