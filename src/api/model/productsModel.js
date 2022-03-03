const db = require("../../database/models")

const model= {
  async getAllProducts(page = 1) {
    try{
      return await db.Products.findAll({
        attributes: ["id", "name", "description"],
        limit: 10,
        offset: 10 * (page - 1)
      })
    }
    catch (error) {
      throw error
    }
  },
  
  async getProductById(id) {
    const constraint = {}
    if (id === "latest") {
      constraint.order = [[ 'id', 'DESC' ]]
    } else {
      constraint.where = {id}
    }
    try{
      return await db.Products.findOne({
        ...constraint,
        attributes: {
          exclude: ["sales", "rating"]
        }
      })
    }
    catch (error) {
      throw error
    }
  },
  
  async countProducts() {
    try{
      return await db.Products.count()
    }
    catch (error) {
      throw error
    }
  },
  
  async getGenresData() {
    try {
      return await db.ProductGenre.findAll({
        include: ["genre"],
        attributes: ["product_id"]
      })
    } catch (error) {
      throw error
    }
  },

  async getProductGenresById(id) {
    try{
      return await db.ProductGenre.findAll({
        where: { product_id: id },
        include: ["genre"],
        attributes: ["genre.name"]
      })
    }
    catch (error) {
      throw error
    }
  },
}

module.exports = model

