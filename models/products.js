const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
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
      type: DataTypes.STRING(50),
      allowNull: false
    },
    author_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'authors',
        key: 'id'
      }
    },
    isbn: {
      type: DataTypes.STRING(13),
      allowNull: false
    },
    genre_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'genres',
        key: 'id'
      }
    },
    house_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: 'houses',
        key: 'id'
      }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'products',
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
      {
        name: "author_id",
        using: "BTREE",
        fields: [
          { name: "author_id" },
        ]
      },
      {
        name: "genre_id",
        using: "BTREE",
        fields: [
          { name: "genre_id" },
        ]
      },
      {
        name: "house_id",
        using: "BTREE",
        fields: [
          { name: "house_id" },
        ]
      },
    ]
  });
};
