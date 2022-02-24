const fs = require('fs');
const path = require('path');
const { validationResult } = require("express-validator")

const validation = view => {
  return async (req, res, next) => {
    // Guardamos los errores en una variable
    const errors = validationResult(req)

    // return res.json(req.body)

    // Si no hay errores, se procede a almacenar la información
    if (errors.isEmpty()) return next()

    // Si se envió un archivo, se elimina de la carpeta pública
    if (req.file) {
      let filename = req.file.filename
      let folder = view.split("/")[0]
      let fullPath = path.resolve(__dirname, "../../public/img", folder, filename)

      if (filename && filename !== "default.png" && fs.existsSync(fullPath))
        fs.rm(fullPath, {}, err => console.error(err))
    }

    const info = {
      errors: errors.mapped(),
      body: req.body,
      id: req.params.id,
      toThousand: n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    if (view === "products/detail") {
      const { productsModel } = require('../model');
      let id = info.id
      info.body = null
      info.libro = await productsModel.getProduct(id)
    }

    if (view === "products/create" || view === "products/edit") {
      const { productsModel } = require('../model');
      info.genres = await productsModel.getAllGenres()
    }
  
    // Renderiza el formulario de creación con mensajes añadidos en caso de error
    return res.status(400).render(view, info)
  }
}


module.exports = validation