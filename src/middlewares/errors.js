const path = require("path")
const bcrypt = require('bcryptjs');
const { check } = require("express-validator")
const { usersModel } = require('../model');

//* Longitud mínima de contraseña. Se asigna un valor bajo durante testeo, por conveniencia
const MIN_LENGTH = 8

const acceptedExtensions = [".jpg", ".jpeg", ".png", ".gif"]


module.exports = {
  user: [
    check("first_name")
      .notEmpty().withMessage("Ingresa tu nombre").bail()
      .isLength({min: 2}).withMessage("Debe tener al menos 2 caracteres"),

    check("last_name")
      .notEmpty().withMessage("Ingresa tu apellido")
      .isLength({min: 2}).withMessage("Debe tener al menos 2 caracteres"),

    check("email")
      .notEmpty().withMessage("Ingresa tu dirección de correo electrónico").bail()
      .isEmail().withMessage("Dirección de correo inválida")
      .custom(async (value, {req}) => {
        let email = value
        let isExisting = await usersModel.getUserBy({email})

        if (isExisting)
          throw new Error("Email already exists")

        return true
      }).withMessage("Email ya existe!"),
  ],

  password: [
    check("old_password")
    .notEmpty().withMessage("Ingresa tu contraseña anterior").bail()
    .custom(async (value, {req}) => {
      let id = req.session.user.id
      let user = await usersModel.getUserBy({id})
      let check = bcrypt.compareSync(value, user.password)

      if (!check)
        throw new Error("Wrong password")

      return true
    }).withMessage("Contraseña anterior incorrecta"),

    check("new_password")
    .notEmpty().withMessage("Ingresa una contraseña nueva").bail()
    .isLength({ min: MIN_LENGTH }).withMessage(`Tu contraseña debe tener al menos ${MIN_LENGTH} caracteres de longitud`),

    check("new_password_confirm").custom((value, {req}) => {
      //* Si las contraseñas no coinciden, se genera un nuevo error
      if (value !== req.body.new_password)
        throw new Error("Passwords don't match")

      //* Se retorna true para indicar el éxito de este custom validator
      return true
    }).withMessage("Contraseñas no coinciden"),
  ],

  fullUser: [
    check("first_name").notEmpty().withMessage("Ingresa tu nombre"),

    check("last_name").notEmpty().withMessage("Ingresa tu apellido"),

    check("email")
    .notEmpty().withMessage("Ingresa tu dirección de correo electrónico").bail()
    .isEmail().withMessage("Dirección de correo inválida")
    .custom(async (value, {req}) => {
      let email = value
      let isExisting = await usersModel.getUserBy({email})

      if (isExisting)
        throw new Error("Email already exists")

      return true
    }).withMessage("Email ya existe!"),

    check("password")
    .notEmpty().withMessage("Ingresa una contraseña").bail()
    .isLength({
      min: MIN_LENGTH
    }).withMessage(`Tu contraseña debe tener al menos ${MIN_LENGTH} caracteres de longitud`),

    check("passwordConfirm").custom((value, {req}) => {
      //* Si las contraseñas no coinciden, se genera un nuevo error
      if (value !== req.body.password)
        throw new Error("Passwords don't match")

      //* Se retorna true para indicar el éxito de este custom validator
      return true
    }).withMessage("Contraseñas no coinciden"),
  ],

  pic: (name) => {
    return [
      check(name).custom((value, {req}) => {
        //* Extensión del archivo subido y extensiones aceptadas
        let ext = path.extname(req.file?.originalname)

        //* Si la extensión del archivo no es aceptada, se genera un nuevo error
        if (!acceptedExtensions.includes(ext)) {
          throw new Error("Invalid extension")
        }

        //* Se retorna true para indicar el éxito de este custom validator
        return true
      }).withMessage(`Extensión inválida (extensiones aceptadas: ${acceptedExtensions.join(", ")})`)
    ]
  },

  product: [
    check("name").notEmpty().withMessage("Debes ingresar un nombre para este libro"),

    check("author").notEmpty().withMessage("Debes ingresar un nombre de autor"),

    check("isbn")
      .notEmpty().withMessage("Debes ingresar un ISBN").bail()
      .isISBN().withMessage("ISBN inválido"),

    check("house").notEmpty().withMessage("Debes ingresar un nombre de editorial"),

    check("price")
      .notEmpty().withMessage("Debes definir un precio").bail()
      .isInt().withMessage("Debe ser un número"),
  ]
}