const app = require("./app")

//* Declarar el puerto para uso con Heroku
let port = process.env.PORT || 4000


//! FAVOR NO AGREGAR CÓDIGO DEBAJO DE ESTA LINEA
app.listen(port, () => console.log("Servidor corriendo en el puerto", port))