const bcrypt = require("bcryptjs")
const db = require('../database/models');

//todo: editar o eliminar esta clase
class User {
  constructor({img, name, surname, category, email, password}) {
    this.img = img ?? "default.png"
    this.name = name
    this.surname = surname
    this.category = category
    this.email = email
    this.password = bcrypt.hashSync(password, 10)
  }

  static edit(user, {img, name, surname, category, email, password}) {
    user.img = img ?? user.img
    user.name = name ?? user.name
    user.surname = surname ?? user.surname
    user.category = category ?? user.category
    user.email = email ?? user.email
    user.password = bcrypt.hashSync(password, 10) ?? user.password
  }
}


const model = {
  //* Obtener un usuario mediante un ID
  getUser: async function (id) {
    try {
      return await db.Users.findbyPk(id)
    } catch (error) {
      console.error(error)
    }
  },

  //* Busca un usuario por su email
  findUser: async function (inputEmail) {
    try {
      return await db.Users.findOne({ where: { email: inputEmail } })
    } catch (error) {
      console.error(error)
    }
  },


  //* Añadir un nuevo usuario
  addUser: async function (user, fileName) {
    //todo: cambiar las propiedades de esta variable
    let newUser = new User({...user, img: fileName})
    
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
      User.edit(currentItem, {...user, img: fileName})
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
      console.error(error);
    }
  },
}


module.exports = model