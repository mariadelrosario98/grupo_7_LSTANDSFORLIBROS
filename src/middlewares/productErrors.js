const { check } = require("express-validator")

let acceptedExtensions = [".jpg", "jpeg", ".png", ".gif"]

let errors = [
  check("name").notEmpty().withMessage("Debes ingresar un nombre para este libro"),

  check("author").notEmpty().withMessage("Debes ingresar un nombre de autor"),

  check("isbn")
    .notEmpty().withMessage("Debes ingresar un ISBN").bail()
    .isISBN().withMessage("ISBN inválido"),

  check("house").notEmpty().withMessage("Debes ingresar un nombre de editorial"),

  check("price")
    .notEmpty().withMessage("Debes definir un precio").bail()
    .isInt().withMessage("Debe ser un número"),

  // check("product_image").custom((value, {req}) => {
  //   // Extensión del archivo subido y extensiones aceptadas
  //   let ext = path.extname(req.file.originalname)

  //   // Si la extensión del archivo no es aceptada, se genera un nuevo error
  //   if(!acceptedExtensions.includes(ext)) {
  //     throw new Error("Invalid extension")
  //   }

  //   // Se retorna true para indicar el éxito de este custom validator
  //   return true
  // }).withMessage(`Extensión inválida (extensiones aceptadas: ${acceptedExtensions.join(", ")})`)
]


module.exports = errors