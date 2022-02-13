const db = require('../database/models')
const { User } = require('./classes')


const model = {
  // Obtener un usuario mediante campo especificado
  getUserBy: async function (where) {
    try {
      return await db.Users.findOne({ where })
    } catch (error) {
      console.error(error)
    }
  },

  // Obtener todos los usuarios
  getAllUsers: async function() {
    try {
      return await db.Users.findAll()
    } catch (error) {
      console.error(error)
    }
  },


  // Añadir un nuevo usuario
  addUser: async function (user) {
    let newUser = new User(user)
    
    try {
      db.Users.create({...newUser})
    } catch (error) {
      console.error(error)
    }
  },


  // Editar la información de un usuario
  editUser: async function (id, user) {
    try {
      let currentItem = await this.getUserBy({id})
      await currentItem.update(user)
    } catch (error) {
      console.error(error)
    }
  },


  // Borrar un usuario
  deleteUser: async function (id) {
    try {
      db.Users.destroy({ where: {id} })
    } catch (error) {
      console.error(error)
    }
  },
}


module.exports = model