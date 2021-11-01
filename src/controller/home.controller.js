const libros = require("../model/database.json")

const controller = {
  index: (req, res) => {
    res.render("index")
  },

  login: (req, res) => {
    res.render("./users/login")
  },
  
  register: (req, res) => {
    res.render("./users/register")
  },

  productCart: (req, res) => {
    res.render("./products/product-cart", {libros: libros})
  },

  productDetail: (req, res) => {
    res.render("./products/product-detail")
  },
}

module.exports = controller