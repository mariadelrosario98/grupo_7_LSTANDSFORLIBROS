const fs = require("fs")
const path = require("path")
const object = {}

// Rutina de código para requerir todos los archivos en la carpeta
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== path.basename(__filename)) && (file.slice(-3) === '.js')
  })
  .forEach(file => {
    const element = require(path.join(__dirname, file))
    object[file.replace(".js", "")] = element
  })


module.exports = object