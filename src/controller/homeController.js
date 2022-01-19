const { productsDB } = require("../data");
const { productsModel } = require("../model")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    let libros = productsDB
    res.status(200).render("index", {libros, toThousand})
  },

  cart: (req, res) => {
    let libros = productsDB
    res.status(200).render("product-cart", {libros, toThousand})
  },

  search: async (req, res) => {
    let queryString = req.params.queryString
    try {
      let libros = await productsModel.searchProductsByName(queryString)
      res.status(200).render("search", { libros, toThousand })
    } catch (error) {
      console.error(error)
      res.status(500).send("500! Error!! Ayayay")
    }
  }
}


module.exports = controller