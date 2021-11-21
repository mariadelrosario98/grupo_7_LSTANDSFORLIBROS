const fs = require("fs")
const path = require("path")
const { productsDB } = require("../data")

const newID = () => {
  let id = 0
  productsDB.forEach(p => p.id > id ? id = p.id : "")
  return id + 1
}

const writeProducts = () => {
  let dbJSON = JSON.stringify(productsDB, null, 4)
  let dbPath = path.resolve(__dirname, "../data/products.json")
  fs.writeFileSync(dbPath, dbJSON)
}

const model = {
  getProduct: function (id) {
    return productsDB.find(item => item.id === id) || null
  },

  addProduct: function (product, fileName) {
    let newProduct = {
      id: newID(),
      img: fileName,
      ...product,
      price: parseInt(product.price)
    }

    productsDB.push(newProduct)

    writeProducts()
  },

  editProduct: function (id, product, fileName) {
    if (!this.getProduct(id))
      return console.error("Este producto no existe!!", id)

    let currentItem = this.getProduct(id)
    let editedItem = {
      ...currentItem,
      img: fileName || currentItem.img,
      name: product.name || currentItem.name,
      autor: product.autor || currentItem.autor,
      isbn: product.isbn || currentItem.isbn,
      type: product.type || currentItem.type,
      price: parseInt(product.price || currentItem.price),
      desc: product.desc || currentItem.desc,
    }

    let index = productsDB.indexOf(currentItem)
    productsDB[index] = editedItem

    writeProducts()
  },

  deleteProduct: function (id) {
    let productToDelete = this.getProduct(id)
    if (!productToDelete)
      return console.error("Este producto no existe!! id: ", id)

    let indexToDelete = productsDB.indexOf(productToDelete)
    productsDB.splice(indexToDelete, 1)

    writeProducts()
  },
}

module.exports = model

// console.log(model.getProduct(0))
// console.log(model.getProduct(1))
// console.log(model.getProduct(3))
// console.log(model.getProduct(5))
// console.log(model.getProduct(7))