const db = require('../database/models')
const Op = db.Sequelize.Op
const { Product } = require('./classes')


const model = {
  // Obtener un producto mediante un ID
  async getProduct(id) {
    try {
      const product = await db.Products.findByPk(id)

      const productGenres = await db.ProductGenre.findAll({
        where: { product_id: id },
        include: ["genre", "product"]
      })

      const genreIDs = []
      const genreNames = []
      productGenres.forEach(item => {
        genreIDs.push(item.genre.id)
        genreNames.push(item.genre.name)
      })

      return {...product.dataValues, genreIDs, genreNames}
    } catch (error) {
      throw error
    }
  },


  // Obtener datos especificos de un producto
  async getProductInfo(id, attributes) {
    try {
      return await db.Products.findOne({ where: { id }, attributes })
    } catch (error) {
      throw error
    }
  },


  // Obtener todos los productos
  async getAllProducts() {
    try {
      return await db.Products.findAll()
    } catch (error) {
      throw error
    }
  },


  // Obtener todos los géneros
  async getAllGenres() {
    try {
      return await db.Genres.findAll()
    } catch (error) {
      throw error
    }
  },


  // Buscar productos mediante barra de busqueda
  async searchProductsByName(query, { orderBy, orderHow, limit, offset } = { limit: 10, offset: 0 }) {
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
      throw error
    }
  },


  // Añadir un nuevo producto
  async addProduct(body) {
    try {
      const newProduct = new Product(body)
      await db.Products.create(newProduct)
      
      const newestProduct = await db.Products.findOne({
        order: [[ 'id', 'DESC' ]],
        attributes: ["id"]
      })

      for await (const genreID of body.genres) {
        db.ProductGenre.create({
          product_id: newestProduct.id,
          genre_id: parseInt(genreID)
        })
      }
    } catch (error) {
      throw error
    }
  },


  // Editar la información de un producto
  async editProduct(id, body) {
    try {
      await db.Products.update({...body}, { where: { id } })
      if (body.genres) {
        await db.ProductGenre.destroy({ where: { product_id: id } })
        for await (const genreID of body.genres) {
          db.ProductGenre.create({
            product_id: id,
            genre_id: parseInt(genreID)
          })
        }
      }
    } catch (error) {
      throw error
    }
  },


  // Borrar un producto
  deleteProduct(id) {
    try {
      db.ProductGenre.destroy({ where: { product_id: id } })
      db.Products.destroy({ where: {id} })
    } catch (error) {
      throw error
    }
  },
}


module.exports = model

