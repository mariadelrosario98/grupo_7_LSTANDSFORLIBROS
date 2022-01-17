const fs = require("fs")
const path = require("path")
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

  edit({img, name, surname, category, email, password} = this) {
    this.img = img ?? "default.png"
    this.name = name
    this.surname = surname
    this.category = category
    this.email = email
    this.password = bcrypt.hashSync(password, 10)
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


  //todo: Editar la información de un usuario
  editUser: async function (id, user, fileName) {
    let currentItem = await this.getUser(id)

    if (!currentItem)
      return console.error("Este usuario no existe!! (o hubo un error en la base de datos, no sé XD)", id)

    //todo: cambiar las propiedades de esta variable
    currentItem.edit({...user, img: fileName})

    try {
      db.User.update({...currentItem}, { where: {id} })
    } catch (err) {
      console.error(err)
    }
  },


  //todo: Borrar un usuario
  deleteUser: async function (id) {
    try {
      db.User.destroy({ where: {id} })
    } catch (err) {
      console.error(err);
    }
  },
}


module.exports = model