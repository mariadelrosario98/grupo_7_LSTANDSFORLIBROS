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
      return await db.User.findbyPk(id)
    } catch (err) {
      console.error(err)
    }
  },


  //* Añadir un nuevo usuario
  addUser: async function (user, fileName) {
    //todo: cambiar las propiedades de esta variable
    let newUser = new User({...user, img: fileName})
    
    try {
      db.User.create({...newUser})
    } catch (err) {
      console.error(err)
    }
  },


  //* Editar la información de un usuario
  editUser: async function (id, user, fileName) {
    //todo: cambiar las propiedades de esta variable
    try {
      let currentItem = await this.getUser(id)
      User.edit(currentItem, {...user, img: fileName})
      db.User.update({...currentItem}, { where: {id} })
    } catch (err) {
      console.error(err)
    }
  },


  //* Borrar un usuario
  deleteUser: async function (id) {
    try {
      db.User.destroy({ where: {id} })
    } catch (err) {
      console.error(err);
    }
  },
}


module.exports = model