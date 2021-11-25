const fs = require("fs")
const path = require("path")
const { usersDB } = require("../data")

const newID = () => {
  let id = 0
  usersDB.forEach(p => p.id > id ? id = p.id : "")
  return id + 1
}

const writeUsers = () => {
  let dbJSON = JSON.stringify(usersDB, null, 4)
  let dbPath = path.resolve(__dirname, "../data/users.json")
  fs.writeFileSync(dbPath, dbJSON)
}

const model = {
  getUser: function (id) {
    return usersDB.find(item => item.id === id) || null
  },

  addUser: function (user, fileName) {
    let newUser = {
      id: newID(),
      img: fileName,
      ...user,
    }

    usersDB.push(newUser)

    writeUsers()
  },

  editUser: function (id, user, fileName) {
    if (!this.getUser(id))
      return console.error("Este usuario no existe!!", id)

    let currentItem = this.getUser(id)
    let editedItem = {
      ...currentItem,
      img: fileName || currentItem.img,
      name: product.name || currentItem.name,
      surname: product.surname || currentItem.surname,
      email: product.email || currentItem.email,
      password: product.password || currentItem.password,
      category: product.category || currentItem.category,
    }

    let index = usersDB.indexOf(currentItem)
    usersDB[index] = editedItem

    writeUsers()
  },

  deleteUser: function (id) {
    let userToDelete = this.getUser(id)
    if (!userToDelete)
      return console.error("Este usuario no existe!! id: ", id)

    let indexToDelete = usersDB.indexOf(userToDelete)
    usersDB.splice(indexToDelete, 1)

    writeUsers()
  },
}

module.exports = model

// console.log(model.getUser(0))
// console.log(model.getUser(1))
// console.log(model.getUser(3))
// console.log(model.getUser(5))
// console.log(model.getUser(7))