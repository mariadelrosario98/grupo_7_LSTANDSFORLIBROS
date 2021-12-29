const { check } = require("express-validator")

//* Longitud mínima de contraseña. Se asigna un valor bajo durante testeo, por conveniencia
let min = 4

let errors = [
  check("name").notEmpty().withMessage("Ingresa tu nombre"),

  check("surname").notEmpty().withMessage("Ingresa tu apellido"),

  check("email")
    .notEmpty().withMessage("Ingresa tu dirección de correo electrónico").bail()
    .isEmail().withMessage("Dirección de correo inválida"),

  check("password")
    .isEmpty().withMessage("Ingresa una contraseña").bail()
    .isLength({ min }).withMessage(`Tu contraseña debe tener al menos ${min} caracteres de longitud`)
]


module.exports = errors