const { check } = require("express-validator")

let validateProduct = [
  check("name").notEmpty().withMessage("Debes ingresar un nombre para este libro"),

  check("autor").notEmpty().withMessage("Debes ingresar un nombre de autor"),

  check("isbn")
    .notEmpty().withMessage("Debes ingresar un ISBN").bail()
    .isISBN().withMessage("Ingresa un ISBN valido"),

  check("type").notEmpty().withMessage("Debes ingresar un género"),

  check("price")
    .notEmpty().withMessage("Debes definir un precio").bail()
    .isInt().withMessage("Debe ser un número"),

  check("product_image").notEmpty().withMessage("Debes subir una imagen"),
]


module.exports = { validateProduct }