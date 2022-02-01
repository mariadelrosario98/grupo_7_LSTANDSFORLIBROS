require('dotenv').config()
const app = require("./app")

// Definir el puerto en el cual nuestro servidor va a correr
let port = process.env.PORT


//! FAVOR NO AGREGAR CÓDIGO DEBAJO DE ESTA LINEA
app.listen(port, () => console.log("Servidor corriendo en el puerto", port))