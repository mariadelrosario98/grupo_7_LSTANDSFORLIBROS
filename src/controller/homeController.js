const { productsDB } = require("../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    res.render("index", {libros: productsDB, toThousand})
  },

  cart: (req, res) => {
    res.render("product-cart", {libros: productsDB, toThousand})
  },
}


module.exports = controller