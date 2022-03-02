const db = require("../../database/models")

const model= {
  getAllProducts: async function (){
    try{
      return await db.Products.findAll()
    }
    catch (error) {
      throw error
    }
  },
  getProductById: async function (id){
    try{
      return await db.Products.findOne({where: {id}})
    }
    catch (error) {
      throw error
    }
  },
  // getProductGenresById: async function(where){
  //   try{
  //     return await 
  //   }
  //   catch (error) {
  //     throw error
  //   }
  // },
  countProducts: async function(){
    try{
      return await db.Products.count()
    }
    catch (error) {
      throw error
    }
  }
}

module.exports = model