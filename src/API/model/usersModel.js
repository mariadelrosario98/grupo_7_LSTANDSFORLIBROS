const db = require("../../database/models")

module.exports = {
  getAllUsers: async function () {
    try{
      return await db.Users.findAll()
    }
    catch (error) {
      throw error
    }
  },
  getUserById: async function(where){
    try{
      return await db.Users.findOne({where})
    }
    catch (error) {
      throw error
    }
  },
  countUsers: async function(){
    try{
    }
    catch (error) {
      throw error
    }
  }
}