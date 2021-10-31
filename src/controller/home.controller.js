const controller = {
  index: (req, res) => {
    res.render("index")
  },

  login: (req, res) => {
    res.render("login")
  },
  
  register: (req, res) => {
    res.render("register")
  },

  productCart: (req, res) => {
    res.render("product-cart")
  },

  productDetail: (req, res) => {
    res.render("product-detail")
  },
}

module.exports = controller