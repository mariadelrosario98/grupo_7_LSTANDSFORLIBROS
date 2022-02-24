var DataTypes = require("sequelize").DataTypes;
var _Genres = require("./Genres");
var _ProductGenre = require("./ProductGenre");
var _Products = require("./Products");
var _UserProduct = require("./UserProduct");
var _Users = require("./Users");

function initModels(sequelize) {
  var Genres = _Genres(sequelize, DataTypes);
  var ProductGenre = _ProductGenre(sequelize, DataTypes);
  var Products = _Products(sequelize, DataTypes);
  var UserProduct = _UserProduct(sequelize, DataTypes);
  var Users = _Users(sequelize, DataTypes);

  ProductGenre.belongsTo(Genres, { as: "genre", foreignKey: "genre_id"});
  Genres.hasMany(ProductGenre, { as: "ProductGenres", foreignKey: "genre_id"});
  ProductGenre.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(ProductGenre, { as: "ProductGenres", foreignKey: "product_id"});
  UserProduct.belongsTo(Products, { as: "product", foreignKey: "product_id"});
  Products.hasMany(UserProduct, { as: "UserProducts", foreignKey: "product_id"});
  UserProduct.belongsTo(Users, { as: "user", foreignKey: "user_id"});
  Users.hasMany(UserProduct, { as: "UserProducts", foreignKey: "user_id"});
  // Products.belongsToMany(Genres, {through: "ProductGenres"})

  return {
    Genres,
    ProductGenre,
    Products,
    UserProduct,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
