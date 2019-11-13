const Sequelize = require("sequelize");
const db = require('../db')

const Advertisement = db.define('advertisement', {
      title: Sequelize.STRING,
      description: Sequelize.STRING,
      url: Sequelize.TEXT, // this way, you can insert longer text
      price: Sequelize.INTEGER,
      email: Sequelize.STRING,
      phonenumber: Sequelize.INTEGER,
    }, {
      timestamps: false,
      tableName: 'product_advertisements'
    }
  )

module.exports = Advertisement;