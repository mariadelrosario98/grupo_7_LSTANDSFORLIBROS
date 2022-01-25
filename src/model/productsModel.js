const db = require('../database/models');
const Op = db.Sequelize.Op

//todo: editar o eliminar esta clase
class Product {
  constructor({name, author, isbn, house, genre, price, desc, img_path}) {
    this.img_path = img_path ?? "default.png"
    this.name = name
    this.author = author
    this.isbn = isbn
    this.house = house
    this.genre = genre
    this.price = parseInt(price)
    this.desc = desc
  }

  static edit(product, {name, author, isbn, house, genre, price, desc, img_path}) {
    product.img_path = img_path ?? product.img_path
    product.name = name ?? product.name
    product.author = author ?? product.author
    product.isbn = isbn ?? product.isbn
    product.house = house ?? product.house
    product.genre = genre ?? product.genre
    product.price = parseInt(price) ?? product.price
    product.desc = desc ?? product.desc
  }
}


const model = {
  //* Obtener un producto mediante un ID
  getProduct: async function (id) {
    try {
      return await db.Products.findByPk(id)
    } catch (error) {
      console.error(error)
    }
  },


  //* Obtener todos los productos
  getAllProducts: async function() {
    try {
      return await db.Products.findAll()
    } catch (error) {
      console.error(error)
    }
  },


  //* Buscar productos mediante barra de busqueda
  searchProductsByName: async function (query, {orderBy, orderHow, limit, offset} = {limit: 10, offset: 0}) {
    try {
      return await db.Products.findAll({
        where: {
          name: {[Op.like]: `%${query}%`}
        },
        order: [
          [orderBy ?? "name", orderHow ?? "ASC"]
        ],
        limit,
        offset
      })
    } catch (error) {
      console.error(error)
    }
  },


  //* Añadir un nuevo producto
  addProduct: async function (product, fileName) {
    //todo: cambiar las propiedades de esta variable
    let newProduct = new Product({...product, img_path: fileName})

    try {
      db.Products.create({...newProduct})
    } catch (error) {
      console.error(error)
    }
  },


  //* Editar la información de un producto
  editProduct: async function (id, product, fileName) {
    //todo: cambiar las propiedades de esta variable
    try {
      let currentItem = await this.getProduct(id)
      Product.edit(currentItem, {...product, img_path: fileName})
      db.Products.update({...currentItem}, { where: {id} })
    } catch (error) {
      console.error(error)
    }
  },


  //* Borrar un producto
  deleteProduct: async function (id) {
    try {
      db.Products.destroy({ where: {id} })
    } catch (error) {
      console.error(error);
    }
  },
}

// model.getAllProducts().then(p => p.forEach(i => console.log(i.name)))

module.exports = model
