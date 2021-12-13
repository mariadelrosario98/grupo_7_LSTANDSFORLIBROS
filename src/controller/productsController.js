const { productsDB } = require("../data");
const { productsModel } = require("../model")
const { validationResult } = require("express-validator")

const fs = require("fs")
const path = require("path")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  //* Renderiza la vista de detalles de un producto cuyo id fue definido en la URL
  detail: (req, res) => {
    let id = parseInt(req.params.id)
    let libro = productsModel.getProduct(id)

    res.render("products/detail", {libro, toThousand})
  },

  //* Renderiza la vista de productos
  list: (req, res) => {
    res.render("products/list", {libros: productsDB, toThousand})
  },

  //* Renderiza el formulario de creación de producto
  create: (req, res) => {
    res.render("products/create")
  },

  //* Almacena en la base de datos el producto enviado por el formulario de creación de producto
  store: (req, res) => {
    // return res.send(req.body)
    //* Guardamos los errores en una variable
    const errors = validationResult(req)
    // return res.send(errors)

    //* Se almacenan los datos del producto y el nombre del archivo enviado (si existe) en variables
    let product = req.body
    let fileName = req.file ? req.file.filename : null

    if (errors.isEmpty()) {
      //* Guarda el producto en la base de datos y redirige al listado de productos
      productsModel.addProduct(product, fileName)
      res.redirect("/products")
    } 
    else {
      // res.send(errors.mapped())
      //* Borra archivo si se ha enviado por el formulario
      if (fileName) {
        let imgPath = path.resolve(__dirname, "..", "../public/img/products", fileName)
        fs.rmSync(imgPath)
      }

      //* Renderiza el formulario de creación con mensajes de error añadidos
      res.render("products/create", { errors: errors.mapped(), old: req.body })
    }
  },
  
  //* Renderiza el formulario de edición de producto
  edit: (req, res) => {
    let id = parseInt(req.params.id)
    let libro = productsModel.getProduct(id)

    res.render("products/edit", {libro, toThousand}) 
    // res.send(libro)
  },
  
  //* Actualiza en la base de datos el producto enviado por el formulario de edición de producto
  update: (req, res) => {
    //res.send(req.file)
    let id = parseInt(req.params.id)
    let product = req.body
    let fileName = req.file ? req.file.filename : null
    
    productsModel.editProduct(id, product, fileName)
    res.redirect("/products")
  },
  
  //* Borra de la base de datos un producto
  delete: (req, res) => {
    let id = parseInt(req.params.id)

    productsModel.deleteProduct(id)
    res.redirect("/products")
  },
}


module.exports = controller