const Product = require('../../db').Product
const route = require('express').Router()
// let apple = "Apple"
route.get('/', (req,res) => {
    let search_info = require('../../server').search_item
    // console.log(search_info)
    Product.findAll({
        where: {
            manufacturer: search_info
          }
    })
        .then((products) => {
            res.status(200).send(products)
        })
})
route.post('/', (req, res) => {
    if(isNaN(req.body.price)){
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((products) => {
        res.status(201).send(products)
    })
})
exports = module.exports = {
    route
}