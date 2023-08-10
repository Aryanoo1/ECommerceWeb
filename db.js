// const Sequelize = require('sequelize')
// // import {
// //     DB_HOST,DB_NAME,DB_PASSWORD,DB_USER
// // } from './config'
// const DB_NAME = require('./config').DB_NAME
// const DB_HOST = require('./config').DB_HOST
// const DB_PASSWORD = require('./config').DB_PASSWORD
// const DB_USER = require('./config').DB_USER
// const db = new Sequelize(DB_NAME,DB_USER,DB_PASSWORD, {
//     host: DB_HOST,
//     dialect: 'mysql',
//     pool: {
//         min: 0,
//         max: 5
//     }
// })
const db = require('./config').db;
const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password : {
        type: Sequelize.STRING,
        allowNull: false
    }
})
const Seller = db.define('seller', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password : {
        type: Sequelize.STRING,
        allowNull: false
    }
})
const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer : Sequelize.STRING,
    price : {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
})
db.sync({alter: true})
    .then(() => console.log("Database has been synced"))
    .catch((err) => console.error("Error creating database"))
module.exports = {
    User, Seller, Product
}