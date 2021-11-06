const fs = require("fs")
const libros = require("../model/database.json")

const controller = {
  index: (req, res) => {
    res.render("index", {libros: libros})
  },

  login: (req, res) => {
    res.render("login")
  },
  
  register: (req, res) => {
    res.render("register")
  },

  productCart: (req, res) => {
    res.render("product-cart", {libros: libros})
  },

  productDetail: (req, res) => {
    let id = req.params.id
    let libro = libros[id]
    res.render("product-detail", {libro: libro})
  },
}


module.exports = controller