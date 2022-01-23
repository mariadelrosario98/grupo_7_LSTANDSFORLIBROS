const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Products', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    img_path: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "default.png"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    author: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    isbn: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    house: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    sales: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: 0
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Products',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
