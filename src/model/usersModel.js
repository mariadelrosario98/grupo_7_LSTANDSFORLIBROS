const bcrypt = require("bcryptjs")
const db = require('../database/models');

class User {
  constructor({img_path, first_name, last_name, category, email, password}) {
    this.img_path = img_path ?? "default.png"
    this.first_name = first_name
    this.last_name = last_name
    this.category = category
    this.email = email
    this.password = bcrypt.hashSync(password, 10)
  }
}


const model = {
  //* Obtener un usuario mediante campo especificado
  getUserBy: async function (where) {
    try {
      return await db.Users.findOne({ where })
    } catch (error) {
      console.error(error)
    }
  },

  //* Obtener todos los usuarios
  getAllUsers: async function() {
    try {
      return await db.Users.findAll()
    } catch (error) {
      console.error(error)
    }
  },


  //* Añadir un nuevo usuario
  addUser: async function (user) {
    let newUser = new User(user)
    
    try {
      db.Users.create({...newUser})
    } catch (error) {
      console.error(error)
    }
  },


  //* Editar la información de un usuario
  editUser: async function (id, user) {
    try {
      let currentItem = await this.getUserBy({id})
      await currentItem.update(user)
    } catch (error) {
      console.error(error)
    }
  },


  //* Borrar un usuario
  deleteUser: async function (id) {
    try {
      db.Users.destroy({ where: {id} })
    } catch (error) {
      console.error(error)
    }
  },
}


module.exports = model