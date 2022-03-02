const db = require("../../database/models")

const model  = {
  getAllUsers: async function () {
    try{
      return await db.Users.findAll()
    }
    catch (error) {
      throw error
    }
  },
  getUserById: async function(id){
    try{
      return await db.Users.findOne({where: {id}})
    }
    catch (error) {
      throw error
    }
  },
  countUsers: async function(){
    try{
      return await db.Users.count()
    }
    catch (error) {
      throw error
    }
  }
}

module.exports = model

model.countUsers().then(res=>console.log(res))