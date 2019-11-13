const Sequelize = require("sequelize");
const db = require('../db')

const Users = db.define('user', {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
    }, {
      timestamps: false,
      tableName: 'users'
    }
  )

module.exports = Users;