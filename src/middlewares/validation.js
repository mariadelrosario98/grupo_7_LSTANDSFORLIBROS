const fs = require("fs")
const path = require("path")
const { validationResult } = require("express-validator")

const validation = (folder, view) => {
  return (req, res, next) => {
    //* Guardamos los errores en una variable
    const errors = validationResult(req)
  
    //* Renderiza el formulario de creación con mensajes añadidos en caso de error
    if (!errors.isEmpty()) {
      res.render(`${folder}/${view}`, { errors: errors.mapped(), old: req.body })
  
      //* Se elimina la imagen del producto, siempre y cuando esta no sea la imagen por defecto
      if (req.file?.filename && req.file.filename !== "default.png") {
        console.log("Filename:", req.file.filename);
        let imgPath = path.resolve(__dirname, `../../public/img/${folder}`, req.file.filename)
        fs.rmSync(imgPath)
      }
  
      return
    } 
  
    next()
  }
}


module.exports = validation