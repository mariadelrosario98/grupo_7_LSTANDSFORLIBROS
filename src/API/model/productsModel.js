const db = require("../../database/models")

module.exports= {
  getAllProducts: async function (){
    try{
      return await db.Products.findAll()
    }
    catch (error) {
      throw error
    }
  },
  getProductById: async function (where){
    try{
      return await db.Products.findOne({where})
    }
    catch (error) {
      throw error
    }
  },
  getProductGenresById: async function(where){
    try{
      return await
    }
    catch (error) {
      throw error
    }
  },
  countProducts: async function(){
    try{
      return await
    }
    catch (error) {
      throw error
    }
  }
}