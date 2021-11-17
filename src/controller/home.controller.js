const fs = require("fs");
const path = require("path");
const libros = require("../data/products.json");
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const newID = () => {
	let id = 0
	libros.forEach(p => p.id > id ? id = p.id : "")
	return id + 1
}

const controller = {
  index: (req, res) => {
    res.render("index", {libros, toThousand})
  },

  login: (req, res) => {
    res.render("login")
  },
  
  register: (req, res) => {
    res.render("register")
  },

  productCart: (req, res) => {
    res.render("product-cart", {libros, toThousand})
  },

  productDetail: (req, res) => {
    let id = parseInt(req.params.id)
    let libro = null

    libros.forEach(l => l.id === id ? libro = l : "")

    res.render("product-detail", {libro, toThousand})
  },

  productList: (req, res) => {
    res.render("product-list", {libros, toThousand})
  },

  productCreate: (req, res) => {
    res.render("product-create", {libros, toThousand})
  },

  productStore: (req, res) => {
    let newProduct = {
      id: newID(),
      ...req.body
    }
    libros.push(newProduct);
    let librosJSON =JSON.stringify(libros, null, 4);
    let filePath = path.resolve("../data/products.json")
    fs.writeFileSync(filePath, librosJSON);
  },
  
  productEdit: (req, res) => {
    res.render("product-edit", {libros, toThousand})
  },
  
  productUpdate: (req, res) => {
    let librosJSON =JSON.stringify(libros, null, 4);
    let filePath = path.resolve("../data/products.json")
    fs.writeFileSync(filePath, librosJSON);
  },
  
  productDelete: (req, res) => {
    res.render("product-edit", {libros, toThousand})
  },
}


module.exports = controller