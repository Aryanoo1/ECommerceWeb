require("dotenv").config();
const Sequelize = require('sequelize')
const urlDB = `mysql://${process.env.MYSQLUSER}:${process.env.MYSQLPASSWORD}@${process.env.MYSQLHOST}:${process.env.MYSQLPORT}/${process.env.MYSQLDATABASE}`;
const db = new Sequelize(urlDB,{
    dialect: 'mysql'
})
const port = process.env.MYSQLPORT
exports = module.exports = {
    db, Sequelize, port
}