const bcrypt = require('bcryptjs')

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

class Product {
  constructor({name, author, isbn, house, genre, price, description, img_path}) {
    this.img_path = img_path ?? "default.png"
    this.name = name
    this.author = author
    this.isbn = isbn
    this.house = house
    this.genre = genre
    this.price = parseInt(price)
    this.description = description
  }
}

module.exports = { User, Product }