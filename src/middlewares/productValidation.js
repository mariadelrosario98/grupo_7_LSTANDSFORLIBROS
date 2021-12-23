const { validationResult } = require("express-validator")

const productValidation = (req, res, next) => {
  //* Guardamos los errores en una variable
  const errors = validationResult(req)

  //* Renderiza el formulario de creación con mensajes añadidos en caso de error
  if (!errors.isEmpty()) {
    res.render("products/create", { errors: errors.mapped(), old: req.body })
    return
  } 

  next()
}

module.exports = productValidation