const fs = require("fs")
const path = require("path")
const { productsDB } = require("../data")

//* Crea un nuevo ID
const newID = () => {
  let id = 0
  productsDB.forEach(p => p.id > id ? id = p.id : "")
  return id + 1
}

//* Escribe los datos actualizados en el archivo .json
const writeProducts = () => {
  let dbJSON = JSON.stringify(productsDB, null, 4)
  let dbPath = path.resolve(__dirname, "../data/products.json")
  fs.writeFileSync(dbPath, dbJSON)
}

const model = {
  //* Obtener un producto mediante un ID
  getProduct: function (id) {
    return productsDB.find(item => item.id === id) || null
  },

  //* Añadir un nuevo producto
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

  //* Editar la información de un producto
  editProduct: function (id, product, fileName) {
    if (!this.getProduct(id))
      return console.error("Este producto no existe!!", id)

    let currentItem = this.getProduct(id)

    if (fileName) {
      let imgPath = path.resolve(__dirname, "..", "../public/img/products", currentItem.img)
      fs.rmSync(imgPath)
    }

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

  //* Borrar un producto
  deleteProduct: function (id) {
    let productToDelete = this.getProduct(id)
    if (!productToDelete)
      return console.error("Este producto no existe!! id: ", id)

    let indexToDelete = productsDB.indexOf(productToDelete)

    let imgPath = path.resolve(__dirname, "..", "../public/img/products", productsDB[indexToDelete].img)
    fs.rmSync(imgPath)

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