const express = require("express")
const app = express()
const path = require("path")
const rutas = require("./routes/home.routes.js")

let port = process.env.PORT || 3000

//Definir el motor de templates y la carpeta views
app.set("view engine", "ejs")
app.set("views", __dirname + "/views")

//Definir la carpeta pública
app.use(express.static(path.join(__dirname, "./public")))

//Requerir las rutas
app.use("/", rutas)


//!FAVOR NO AGREGAR CÓDIGO DEBAJO DE ESTA LINEA
app.listen(port, () => console.log("Servidor corriendo en el puerto", port))