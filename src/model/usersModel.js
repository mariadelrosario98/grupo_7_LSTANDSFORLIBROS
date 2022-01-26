const bcrypt = require("bcryptjs")
const db = require('../database/models');

//todo: editar o eliminar esta clase
class User {
  constructor({img_path, first_name, last_name, category, email, password}) {
    this.img_path = img_path ?? "default.png"
    this.first_name = first_name
    this.last_name = last_name
    this.category = category
    this.email = email
    this.password = bcrypt.hashSync(password, 10)
  }

  static edit(user, {img_path, first_name, last_name, category, email, password}) {
    user.img_path = img_path ?? user.img_path
    user.first_name = first_name ?? user.first_name
    user.last_name = last_name ?? user.last_name
    user.category = category ?? user.category
    user.email = email ?? user.email
    if (password) {
      user.password = bcrypt.hashSync(password, 10)
    } 
  }
}


const model = {

  //* Obtener un usuario mediante un ID
  getUser: async function (id) {
    try {
      return await db.Users.findByPk(id)
    } catch (error) {
      console.error(error)
    }
  },

  getAllUsers: async function() {
    try {
      return await db.Users.findAll()
    } catch (error) {
      console.error(error)
    }
  },

  //* Busca un usuario por su email
  findUserByEmail: async function (inputEmail) {
    try {
      return await db.Users.findOne({ where: { email: inputEmail } })
    } catch (error) {
      console.error(error)
    }
  },


  //* Añadir un nuevo usuario
  addUser: async function (user, fileName) {
    //todo: cambiar las propiedades de esta variable
    let newUser = new User({...user, img_path: fileName})
    
    try {
      db.Users.create({...newUser})
    } catch (error) {
      console.error(error)
    }
  },


  //* Editar la información de un usuario
  editUser: async function (id, user, fileName) {
    //todo: cambiar las propiedades de esta variable
    try {
      let currentItem = await this.getUser(id)
      User.edit(currentItem, {...user})
      console.table(currentItem)
      db.Users.update({...currentItem}, { where: {id} })
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