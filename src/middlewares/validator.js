const { check } = require("express-validator")

let validate_addProduct = [
  check("name").notEmpty().withMessage("Debes rellenar este campo"),

  check("autor").notEmpty().withMessage("Debes rellenar este campo"),

  check("isbn")
    .notEmpty().withMessage("Debes rellenar este campo").bail()
    .isISBN().withMessage("Ingresa un ISBN valido"),

  check("price")
    .notEmpty().withMessage("Debes rellenar este campo").bail()
    .isInt().withMessage("Debe ser un número"),

  check("product-image").notEmpty().withMessage("Debes subir una imagen"),
]


module.exports = { validate_addProduct }