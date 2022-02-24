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
      console.error(error)
    }
  },


  // Obtener datos especificos de un producto
  async getProductInfo(id, attributes) {
    try {
      return await db.Products.findOne({ where: { id }, attributes })
    } catch (error) {
      console.error(error)
    }
  },


  // Obtener todos los productos
  async getAllProducts() {
    try {
      return await db.Products.findAll()
    } catch (error) {
      console.error(error)
    }
  },


  // Obtener todos los géneros
  async getAllGenres() {
    try {
      return await db.Genres.findAll()
    } catch (error) {
      console.error(error)
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
      console.error(error)
    }
  },


  // Añadir un nuevo producto
  async addProduct(body) {
    try {
      const newProduct = new Product(body)
      await db.Products.create(newProduct)
      
      const productID = db.Products.findOne({ order: [[ 'id', 'DESC' ]] });
      for await (const genreID of body.genres) {
        db.ProductGenre.create({
          product_id: productID,
          genre_id: parseInt(genreID)
        })
      }
    } catch (error) {
      console.error(error)
    }
  },


  // Editar la información de un producto
  async editProduct(id, body) {
    try {
      await db.Products.update({...body}, { where: { id } })
      await db.ProductGenre.destroy({ where: { product_id: id } })
      for await (const genreID of body.genres) {
        db.ProductGenre.create({
          product_id: id,
          genre_id: parseInt(genreID)
        })
      }
    } catch (error) {
      console.error(error)
    }
  },


  // Borrar un producto
  async deleteProduct(id) {
    try {
      db.Products.destroy({ where: {id} })
    } catch (error) {
      console.error(error)
    }
  },
}


module.exports = model

