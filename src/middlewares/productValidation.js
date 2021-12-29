const { validationResult } = require("express-validator")

const productValidation = (req, res, next) => {
  //* Guardamos los errores en una variable
  const errors = validationResult(req)

  //* Renderiza el formulario de creación con mensajes añadidos en caso de error
  if (!errors.isEmpty()) {
    res.render("products/create", { errors: errors.mapped(), old: req.body })

    //* Se elimina la imagen del producto, siempre y cuando esta no sea la imagen por defecto
    if (req.file.filename && req.file.filename !== "default.png") {
      let imgPath = path.resolve(__dirname, "../../public/img/products", req.file.filename)
      fs.rmSync(imgPath)
    }

    return
  } 

  next()
}


module.exports = productValidation