const express = require("express")
const app = express()
const path = require("path")
const rutas = require("./routes/home.routes.js")

let port = process.env.PORT || 3000

app.use(express.static(path.join(__dirname, "./public")))

app.use("/", rutas)


//FAVOR NO AGREGAR CÓDIGO DEBAJO DE ESTA LINEA
app.listen(port, () => console.log("Servidor corriendo en el puerto", port))