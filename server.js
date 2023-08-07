const express = require('express')
// import {express} from 'express'
const app = express()
const PORT = process.env.PORT
// import {PORT} from './config.js'
const path = require('path')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("home"))
app.use(express.static("user-login"))
app.use(express.static("seller-login"))
app.use(express.static("main"))
app.use(express.static("productAdd"))
app.use(express.static("UserInterface"))
app.use('/', express.static(path.join(__dirname, 'UserInterface')))
app.use('/', express.static(path.join(__dirname, 'productAdd')))
app.use('/api', require('./routes/api').route)
app.get("/", (req,res) => {
    res.sendFile(__dirname + '/home/home.html')
})
app.get("/loginCustomer", (req,res) => {
    res.sendFile(__dirname + '/user-login/User-login-Customer.html')
})
app.get("/loginSeller", (req,res) => {
    res.sendFile(__dirname + '/seller-login/User-login-Seller.html')
})
app.get("/home", (req,res) => {
    res.sendFile(__dirname + '/main/homePage.html')
})
app.post("/home", (req,res) => {
    let UserName = req.body.user
    exports = module.exports = {
        UserName
    }
    res.sendFile(__dirname + '/main/homePage.html')
})
app.get("/addproduct", (req,res) => {
    res.sendFile(__dirname + '/productAdd/add_products.html')
})
app.get("/productResult", (req,res) => {
    res.sendFile(__dirname + '/productAdd/productResultWindow.html')
})
app.post("/userinterface", (req,res) => {
    let search_item = req.body.text_field
    exports = module.exports = {
        search_item
    }
    res.sendFile(__dirname + '/UserInterface/userInterface.html')
})
app.listen(PORT, () => {
    console.log("Server Started at http://localhost:" + PORT)
})