const fs = require("fs")
const path = require("path")

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

  edit({name, author, isbn, type, price, desc, img} = this) {
    this.img = img ?? "default.png"
    this.name = name
    this.author = author
    this.isbn = isbn
    this.type = type
    this.price = parseInt(price)
    this.desc = desc
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
    //* Se obtiene el producto correspondiente al id ingresado
    let currentItem = await this.getProduct(id)
    
    //* Si no existe producto con el id ingresado...
    if (!currentItem)
      return console.error("Este producto no existe!! (o hubo un error en la base de datos, no sé XD)", id)

    //* Se guardan los datos del producto editado
    //todo: cambiar las propiedades de esta variable
    currentItem.edit({...product, img: fileName})

    try {
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