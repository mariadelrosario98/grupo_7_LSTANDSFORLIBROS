const { productsDB } = require("../data");
const { productsModel } = require("../model")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  detail: (req, res) => {
    let id = parseInt(req.params.id)
    let libro = productsModel.getProduct(id)

    res.render("product-detail", {libro, toThousand})
  },

  list: (req, res) => {
    res.render("product-list", {libros: productsDB, toThousand})
  },

  create: (req, res) => {
    res.render("product-create", {libros: productsDB, toThousand})
  },

  store: (req, res) => {
    let newProduct = {
      id: newID(),
      ...req.body
    }
    
    productsModel.addProduct(newProduct)
  },
  
  edit: (req, res) => {
    res.render("product-edit", {libros: productsDB, toThousand})
  },
  
  update: (req, res) => {
    let id = req.params.id
    let product = req.body
    
    productsModel.editProduct(id, product)
  },
  
  delete: (req, res) => {
    let id = req.params.id

    productsModel.deleteProduct(id)
  },
}


module.exports = controller