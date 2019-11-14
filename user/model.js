const Sequelize = require("sequelize");
const db = require('../db')
const Advertisements = require('../advertisement/model')

const Users = db.define('user', {
      name: Sequelize.STRING,
      email: Sequelize.STRING,
    }, {
      timestamps: false,
      tableName: 'users'
    }
  )
 
// BOTH HAVE TO BE IN THE SAME MODEL FILE, I choose this one here
Advertisements.belongsTo(Users)
Users.hasMany(Advertisements)

module.exports = Users;

// FOREIGN KEY!!!