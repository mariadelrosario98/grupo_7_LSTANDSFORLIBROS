const { productsDB } = require("../data");
const { productsModel } = require("../model")
const { validationResult } = require("express-validator")

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
    // res.send(req.file)
    let product = req.body
    let fileName = req.file ? req.file.filename : null
    
    let errors = validationResult(req)
    if (errors.isEmpty) {
      productsModel.addProduct(product, fileName)
      res.redirect("/products")
    } else {
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