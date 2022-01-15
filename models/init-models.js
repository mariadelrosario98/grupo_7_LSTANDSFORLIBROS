var DataTypes = require("sequelize").DataTypes;
var _authors = require("./authors");
var _genres = require("./genres");
var _houses = require("./houses");
var _products = require("./products");
var _user_product = require("./user_product");
var _users = require("./users");

function initModels(sequelize) {
  var authors = _authors(sequelize, DataTypes);
  var genres = _genres(sequelize, DataTypes);
  var houses = _houses(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var user_product = _user_product(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  products.belongsTo(authors, { as: "author", foreignKey: "author_id"});
  authors.hasMany(products, { as: "products", foreignKey: "author_id"});
  products.belongsTo(genres, { as: "genre", foreignKey: "genre_id"});
  genres.hasMany(products, { as: "products", foreignKey: "genre_id"});
  products.belongsTo(houses, { as: "house", foreignKey: "house_id"});
  houses.hasMany(products, { as: "products", foreignKey: "house_id"});
  user_product.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(user_product, { as: "user_products", foreignKey: "product_id"});
  user_product.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_product, { as: "user_products", foreignKey: "user_id"});

  return {
    authors,
    genres,
    houses,
    products,
    user_product,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
