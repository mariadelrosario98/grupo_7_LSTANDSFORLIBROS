const fs = require("fs")
const path = require("path")
const { validationResult } = require("express-validator")

const validation = (folder, view) => {
  return (req, res, next) => {
    //* Guardamos los errores en una variable
    const errors = validationResult(req)

    //* Si no hay errores, se procede a almacenar la información
    if (errors.isEmpty()) return next()
  
    //* Renderiza el formulario de creación con mensajes añadidos en caso de error
    return res.status(400).render(`${folder}/${view}`, {
      errors: errors.mapped(),
      body: req.body,
      id: req.params.id,
      toThousand: n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    })
  }
}


module.exports = validation