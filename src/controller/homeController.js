const { productsDB } = require("../data");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
  index: (req, res) => {
    // res.send(req.session)
    res.render("index", {libros: productsDB, toThousand, session: req.session || null})
  },

  cart: (req, res) => {
    res.render("product-cart", {libros: productsDB, toThousand, session: req.session || null})
  },
}


module.exports = controller