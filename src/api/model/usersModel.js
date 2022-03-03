const db = require("../../database/models")

const model  = {
  async getAllUsers(page = 1) {
    try{
      return await db.Users.findAll({
        attributes: ["id", "first_name", "last_name", "email"],
        limit: 10,
        offset: 10 * (page - 1)
      })
    }
    catch (error) {
      throw error
    }
  },

  async getUserById(id) {
    const constraint = {}
    if (id === "latest") {
      constraint.order = [[ 'id', 'DESC' ]]
    } else {
      constraint.where = {id}
    }
    try{
      return await db.Users.findOne({
        ...constraint,
        attributes: {
          exclude: ["category", "password"]
        }
      })
    }
    catch (error) {
      throw error
    }
  },

  async countUsers() {
    try{
      return await db.Users.count()
    }
    catch (error) {
      throw error
    }
  }
}

module.exports = model

