const path = require("path")
const { check } = require("express-validator")

//* Longitud mínima de contraseña. Se asigna un valor bajo durante testeo, por conveniencia
let MIN_LENGTH = 4

let acceptedExtensions = [".jpg", "jpeg", ".png", ".gif"]

let errors = [
  check("name").notEmpty().withMessage("Ingresa tu nombre"),

  check("surname").notEmpty().withMessage("Ingresa tu apellido"),

  check("email")
    .notEmpty().withMessage("Ingresa tu dirección de correo electrónico").bail()
    .isEmail().withMessage("Dirección de correo inválida"),

  check("password")
    .notEmpty().withMessage("Ingresa una contraseña").bail()
    .isLength({ MIN_LENGTH }).withMessage(`Tu contraseña debe tener al menos ${MIN_LENGTH} caracteres de longitud`),

  check("passwordConfirm").custom((value, {req}) => {
    //* Si las contraseñas no coinciden, se genera un nuevo error
    if (value !== req.body.password)
      throw new Error("Passwords don't match")

    //* Se retorna true para indicar el éxito de este custom validator
    return true
  }).withMessage("Contraseñas no coinciden"),

  check("profile-pic").custom((value, {req}) => {
    //* Extensión del archivo subido y extensiones aceptadas
    let ext = path.extname(req.file.originalname)

    //* Si la extensión del archivo no es aceptada, se genera un nuevo error
    if(!acceptedExtensions.includes(ext)) {
      throw new Error("Invalid extension")
    }

    //* Se retorna true para indicar el éxito de este custom validator
    return true
  }).withMessage(`Extensión inválida (extensiones aceptadas: ${acceptedExtensions.join(", ")})`)
]


module.exports = errors