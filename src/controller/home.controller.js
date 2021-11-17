const { productsDB } = require("../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    res.render("index", {libros: productsDB, toThousand})
  },

  login: (req, res) => {
    res.render("login")
  },
  
  register: (req, res) => {
    res.render("register")
  },

  cart: (req, res) => {
    res.render("product-cart", {libros: productsDB, toThousand})
  },
}


module.exports = controller