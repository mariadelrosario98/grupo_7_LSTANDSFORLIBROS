const db = require('../database/models');
const Op = db.Sequelize.Op

//todo: editar o eliminar esta clase
class Product {
  constructor({name, author, isbn, type, price, desc, img}) {
    this.img = img ?? "default.png"
    this.name = name
    this.author = author
    this.isbn = isbn
    this.type = type
    this.price = parseInt(price)
    this.desc = desc
  }

  static edit(product, {name, author, isbn, type, price, desc, img}) {
    product.img = img ?? product.img
    product.name = name ?? product.name
    product.author = author ?? product.author
    product.isbn = isbn ?? product.isbn
    product.type = type ?? product.type
    product.price = parseInt(price) ?? product.price
    product.desc = desc ?? product.desc
  }
}


const model = {
  //* Obtener un producto mediante un ID
  getProduct: async function (id) {
    try {
      return await db.Product.findByPk(id)
    } catch (err) {
      console.error(err)
    }
  },


  //* Buscar productos mediante barra de busqueda
  searchProductsByName: async function (query, {orderBy, orderHow, limit, offset} = {limit: 10, offset: 10}) {
    try {
      return await db.Product.findAll({
        where: {
          name: {[Op.like]: `%${query}%`}
        },
        order: [
          [orderBy ?? "name", orderHow ?? "ASC"]
        ],
        limit,
        offset
      })
    } catch (err) {
      console.error(err)
    }
  },


  //* Añadir un nuevo producto
  addProduct: async function (product, fileName) {
    //todo: cambiar las propiedades de esta variable
    let newProduct = new Product({...product, img: fileName})

    try {
      db.Product.create({...newProduct})
    } catch (err) {
      console.error(err)
    }
  },


  //* Editar la información de un producto
  editProduct: async function (id, product, fileName) {
    //todo: cambiar las propiedades de esta variable
    try {
      let currentItem = await this.getProduct(id)
      Product.edit(currentItem, {...product, img: fileName})
      db.Product.update({...currentItem}, { where: {id} })
    } catch (err) {
      console.error(err)
    }
  },


  //* Borrar un producto
  deleteProduct: async function (id) {
    try {
      db.Product.destroy({ where: {id} })
    } catch (err) {
      console.error(err);
    }
  },
}


module.exports = model