const { productsDB } = require("../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    res.status(200).render("index", {libros: productsDB, toThousand})
  },

  cart: (req, res) => {
    res.status(200).render("product-cart", {libros: productsDB, toThousand})
  },
}


module.exports = controller