const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator")

const validation = (view) => {
  return (req, res, next) => {
    // Guardamos los errores en una variable
    const errors = validationResult(req)

    // Si no hay errores, se procede a almacenar la información
    if (errors.isEmpty()) return next()

    // Si se envió un archivo, se elimina de la carpeta pública
    if (req.file) {
      let filename = req.file.filename
      let folder = filename.slice(0, 7) === "profile" ? "users" : "products"
      let fullPath = path.resolve(__dirname, "../../public/img", folder, filename)

      if (filename && filename !== "default.png" && fs.existsSync(fullPath))
        fs.rm(fullPath, {}, err => console.error(err))
    }
  
    // Renderiza el formulario de creación con mensajes añadidos en caso de error
    return res.status(400).render(view, {
      errors: errors.mapped(),
      body: req.body,
      id: req.params.id,
      toThousand: n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    })
  }
}


module.exports = validation