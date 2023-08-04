const Seller = require('../../db').Seller
const route = require('express').Router()
route.get('/', (req, res) => {
    
})
route.post('/', (req, res) => {
    Seller.create({
        email: req.body.email,
        password: req.body.password
    }).then((seller) => {
        res.status(201).send(seller)
    })
})
exports = module.exports = {
    route
}