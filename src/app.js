const express = require("express")
const app = express()
const path = require("path")

let port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "./public")))

//Página principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"))
})

//Detalles de producto (éste supongo que habrá que cambiarlo en el futuro)
app.get("/detail", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/detail.html"))
})

//Carrito de compra
app.get("/checkout", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/checkout.html"))
})

//Inicio de sesión
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"))
})

//Registro
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/signup.html"))
})


//FAVOR NO AGREGAR CÓDIGO DEBAJO DE ESTA LINEA
app.listen(port, () => console.log("Servidor corriendo en el puerto", port))