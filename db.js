const Sequelize = require('sequelize')
const db = new Sequelize('shopweb', 'shopman', 'shoppass', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5
    }
})
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