const { productsModel } = require("../model")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")

const controller = {

  // search:(req, res) => {
  //   db.Products.findByPk(req.params.id)
  // },

  //* Renderiza la vista de detalles de un producto cuyo id fue definido en la URL
  detail: async (req, res) => {
    let id = parseInt(req.params.id)

    try {
      let libro = await productsModel.getProduct(id)
      res.status(200).render("products/detail", {libro, toThousand})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  //* Renderiza la vista de productos
  list: async (req, res) => {
    let libros = await productsModel.getAllProducts()
    res.status(200).render("products/list", {libros, toThousand})
  },


  //* Renderiza el formulario de creación de producto
  create: (req, res) => {
    res.status(200).render("products/create")
  },


  //* Almacena en la base de datos el producto enviado por el formulario de creación de producto
  store: async (req, res) => {
    //* Se almacenan los datos del producto y el nombre del archivo enviado (si existe) en variables
    let product = req.body
    product.img_path = "default.png"

    //* Guarda el producto en la base de datos y redirige al listado de productos
    try {
      await productsModel.addProduct(product)
      res.status(201).redirect("/products")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  

  //* Renderiza el formulario de edición de producto
  edit: async (req, res) => {
    let id = parseInt(req.params.id)

    try {
      let libro = await productsModel.getProduct(id)
      res.status(200).render("products/edit", {body: libro, id, toThousand})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  

  //* Actualiza en la base de datos el producto enviado por el formulario de edición de producto
  update: async (req, res) => {
    let id = parseInt(req.params.id)
    let product = req.body

    //* Se guarda el producto editado en la base de datos
    try {
      await productsModel.editProduct(id, product)
      res.status(201).redirect("/products/" + req.params.id)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
  

  //* Borra de la base de datos un producto
  delete: async (req, res) => {
    let id = parseInt(req.params.id)

    try {
      let product = await productsModel.getProduct(id)
  
      //* Se elimina la imagen del producto, siempre y cuando esta no sea la imagen por defecto
      if (product.img_path !== "default.png") {
        let imgPath = path.resolve(__dirname, "../public/img/products", product.img_path)
        fs.rm(imgPath)
      }
  
      await productsModel.deleteProduct(id)
      res.status(204).redirect("/products")
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
}


module.exports = controller