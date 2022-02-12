const db = require('../database/models')
const Op = db.Sequelize.Op
const { Product } = require('./classes')


const model = {
  // Obtener un producto mediante un ID
  getProduct: async function (id) {
    try {
      return await db.Products.findByPk(id)
    } catch (error) {
      console.error(error)
    }
  },


  // Obtener todos los productos
  getAllProducts: async function() {
    try {
      return await db.Products.findAll()
    } catch (error) {
      console.error(error)
    }
  },


  // Buscar productos mediante barra de busqueda
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


  // Añadir un nuevo producto
  addProduct: async function (body) {
    let newProduct = new Product(body)
    try {
      await db.Products.create(newProduct)
    } catch (error) {
      console.error(error)
    }
  },


  // Editar la información de un producto
  editProduct: async function (id, product) {
    try {
      let currentItem = await this.getProduct(id)
      await currentItem.update({...product})
    } catch (error) {
      console.error(error)
    }
  },


  // Borrar un producto
  deleteProduct: async function (id) {
    try {
      db.Products.destroy({ where: {id} })
    } catch (error) {
      console.error(error)
    }
  },
}


module.exports = model
