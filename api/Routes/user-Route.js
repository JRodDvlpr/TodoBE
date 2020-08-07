const router = require('express').Router();

const Users = require('../Models/user-Model');

const Todo = require('../Models/todo-Model')


router.get('/', (req, res ) => {

    Users.find()
    .then(user => {
        res.status(200).json(user)

    })
    .catch(err => {
        res.status(500).json({ message: " Failed to get Users from the database" })
    })
   
})

router.get('/:id', (req, res) => {
    
    const { id } = req.params;

    Users.findById(id)
    .then(user => {
        user ?
        res.status(200).json(user):
        res.status(404).json({ message: "Invalid user id"})
    })
    .catch(error => {
        res.status(500).json({ message: "Failed to reach the database. Could not retrieve the user"})
    })
})


module.exports = router;