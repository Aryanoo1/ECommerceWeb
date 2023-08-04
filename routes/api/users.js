const User = require('../../db').User
const route = require('express').Router()
route.get('/', (req, res) => {
    let username = require('../../server').UserName
    // console.log(username)
    User.findAll({
        where: {
            email: username
          }
    })
        .then((products) => {
            res.status(200).send(products)
        })
})
route.post('/', (req, res) => {
    User.findOrCreate({
        where: {
            email: req.body.email
        },
        defaults : {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }
    }).then((user) => {
        res.status(201).send(user)
    })
})
exports = module.exports = {
    route
}