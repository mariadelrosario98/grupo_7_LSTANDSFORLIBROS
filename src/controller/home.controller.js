const fs = require("fs")
const libros = require("../model/products.json")

const controller = {
  index: (req, res) => {
    res.render("index", {libros})
  },

  login: (req, res) => {
    res.render("login")
  },
  
  register: (req, res) => {
    res.render("register")
  },

  productCart: (req, res) => {
    res.render("product-cart", {libros})
  },

  productDetail: (req, res) => {
    let id = parseInt(req.params.id)
    let libro = {}

    libros.forEach(l => l.id === id ? libro = l : "")

    res.render("product-detail", {libro})
  },

  productEdit: (req, res) => {
    res.render("product-edit", {libros})
  },
}


module.exports = controller