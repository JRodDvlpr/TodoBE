const router = require('express').Router();

const Users = require('../Models/user-Model');




router.get('/', (req, res ) => {

    Users.find()
    .then(user => {
        res.status(200).json(user)

    })
    .catch(err => {
        res.status(500).json({ message: " Failed to get Users from the database" })
    })
   
})

module.exports = router;