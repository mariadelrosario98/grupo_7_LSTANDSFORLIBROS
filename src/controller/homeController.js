const { productsModel } = require("../model")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  async index(req, res) {
    try {
      let libros = await productsModel.getAllProducts()
      res.status(200).render("index", {libros, toThousand})
  } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },

  async cart(req, res) {
    try {
      let libros = await productsModel.getAllProducts()
      res.status(200).render("product-cart", {libros, toThousand})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },

  async search(req, res) {
    let queryString = req.query.query
    try {
      let libros = await productsModel.searchProductsByName(queryString)
      res.status(200).render("search", { libros, toThousand })
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  }
}


module.exports = controller