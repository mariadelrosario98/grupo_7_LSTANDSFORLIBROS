const res = require('express/lib/response')
const db = require('../database/models')
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
}


const model = {
  //* Obtener un producto mediante un ID
  getProduct: async function (id) {
    try {
      return await db.Products.findByPk(id)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  //* Obtener todos los productos
  getAllProducts: async function() {
    try {
      return await db.Products.findAll()
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
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
      res.status(500).send(error)
    }
  },


  //* Añadir un nuevo producto
  addProduct: async function (body) {
    let newProduct = new Product(body)
    try {
      await db.Products.create(newProduct)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  //* Editar la información de un producto
  editProduct: async function (id, product) {
    try {
      let currentItem = await this.getProduct(id)
      await currentItem.update({...product})
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },


  //* Borrar un producto
  deleteProduct: async function (id) {
    try {
      db.Products.destroy({ where: {id} })
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  },
}


module.exports = model
