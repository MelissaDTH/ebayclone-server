const Sequelize = require("sequelize");

const databaseUrl =
  process.env.DATABASE_URL ||
  "postgres://postgres:password@localhost:5432/postgres";

const db = new Sequelize(databaseUrl);

db.sync()
  // this will sync the data in your database with the schema we're gonna create
  .then(() => console.log("Database scheme is updated")) // a .then callback
  .catch(console.error);

module.exports = db;

// when we use a class as a argument, its an constructor
