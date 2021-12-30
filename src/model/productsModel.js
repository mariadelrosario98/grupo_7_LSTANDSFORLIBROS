const fs = require("fs")
const path = require("path")
const { productsDB } = require("../data")

//* Crea un nuevo ID
const newID = () => {
  let id = 0
  productsDB.forEach(p => id = p.id > id ? p.id : id)
  return id + 1
}

//* Escribe los datos actualizados en el archivo .json
const writeProducts = () => {
  let dbJSON = JSON.stringify(productsDB, null, 4)
  let dbPath = path.resolve(__dirname, "../data/productsDB.json")
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
      img: fileName || "default.png",
      ...product,
      price: parseInt(product.price)
    }

    productsDB.push(newProduct)

    writeProducts()
  },


  //* Editar la información de un producto
  editProduct: function (id, product, fileName) {
    //* Se obtiene el producto correspondiente al id ingresado
    let currentItem = this.getProduct(id)
    let index = productsDB.indexOf(currentItem)
    
    //* Si no existe producto con el id ingresado...
    if (!currentItem)
      return console.error("Este producto no existe!!", id)

    //* Se guardan los datos del producto editado
    let editedItem = {
      ...currentItem,
      img: fileName || currentItem.img,
      ...product,
      price: parseInt(product.price || currentItem.price),
      desc: product.desc || currentItem.desc,
    }

    //* Se almacena el producto editado en la base de datos
    productsDB[index] = editedItem
    writeProducts()
  },


  //* Borrar un producto
  deleteProduct: function (id) {
    let productToDelete = this.getProduct(id)
    let indexToDelete = productsDB.indexOf(productToDelete)

    //* Si no existe producto con el id ingresado...
    if (!productToDelete)
      return console.error("Este producto no existe!! id: ", id)

    //* Se elimina el producto de la base de datos
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