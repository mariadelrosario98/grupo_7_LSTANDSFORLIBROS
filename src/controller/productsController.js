const fs = require("fs")
const path = require("path")

const { productsDB } = require("../data")
const { productsModel } = require("../model")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
  //* Renderiza la vista de detalles de un producto cuyo id fue definido en la URL
  detail: (req, res) => {
    let id = parseInt(req.params.id)
    let libro = productsModel.getProduct(id)

    res.status(200).render("products/detail", {libro, toThousand})
  },


  //* Renderiza la vista de productos
  list: (req, res) => {
    res.status(200).render("products/list", {libros: productsDB, toThousand})
  },


  //* Renderiza el formulario de creación de producto
  create: (req, res) => {
    res.status(200).render("products/create")
  },


  //* Almacena en la base de datos el producto enviado por el formulario de creación de producto
  store: (req, res) => {
    //* Se almacenan los datos del producto y el nombre del archivo enviado (si existe) en variables
    let product = req.body
    let fileName = req.file?.filename || "default.png"

    //* Guarda el producto en la base de datos y redirige al listado de productos
    productsModel.addProduct(product, fileName)
    res.status(201).redirect("/products")
  },
  

  //* Renderiza el formulario de edición de producto
  edit: (req, res) => {
    let id = parseInt(req.params.id)
    let libro = productsModel.getProduct(id)

    res.status(200).render("products/edit", {libro, id})
  },
  

  //* Actualiza en la base de datos el producto enviado por el formulario de edición de producto
  update: (req, res) => {
    let id = parseInt(req.params.id)
    let product = req.body
    let fileName = req.file?.filename || null

    //* Si se subió una imagen, se elimina la anterior, siempre y cuando esta no sea la imagen por defecto
    if (fileName && currentItem.img !== "default.png") {
      let imgPath = path.resolve(__dirname, "../public/img/products", currentItem.img)
      fs.rmSync(imgPath)
    }
    
    //* Se guarda el producto editado en la base de datos
    productsModel.editProduct(id, product, fileName)
    res.status(201).redirect("/products" + req.params.id)
  },
  

  //* Borra de la base de datos un producto
  delete: (req, res) => {
    let id = parseInt(req.params.id)
    let product = productsModel.getProduct(id)

    //* Se elimina la imagen del producto, siempre y cuando esta no sea la imagen por defecto
    if (product.img !== "default.png") {
      let imgPath = path.resolve(__dirname, "../public/img/products", product.img)
      fs.rmSync(imgPath)
    }

    //* Se borra el producto de la base de datos
    productsModel.deleteProduct(id)
    res.status(204).redirect("/products")
  },
}


module.exports = controller