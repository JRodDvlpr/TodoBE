const router = require('express').Router();

const Users = require('../Models/userModel');

// ######### GET All Users ##########

router.get('/', (req, res ) => {

    Users.find()
    .then(user => {
        res.status(200).json(user)

    })
    .catch(err => {
        res.status(500).json({ message: " Failed to get Users from the database" })
    })
   
})

// ######### GET individual User by ID ##########
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

// ######### PUT/Update individual User by ID ##########

router.put('/:id', (req, res) => {

    const { id } = req.params;

    const userChanges = req.body;

    Users.findById(id)
    .then(changes => {
        if (!changes ){
            res.status(400).json({ message: "Enter username to update" })
        } else if (changes) {
            Users.update(userChanges, id)
            .then(updatedUser => {
                res.status(200).json({ message: "Username has been updated", updatedUser})
            })
        } else {
            res.status(404).json({ message: "Could not find a user with the given ID."})
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Could not reach the database. Failed to update user." })
    })

})

// ######### DELETE individual Todo by ID ##########

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Users.remove(id)
    .then(deleted => {
        res.json({ message:`Removed ${deleted} from thedatabase` })
    })
    .catch(err => {
        res.status(500).json({ message: `Could not reach the database. User was not removed.`})
    })
        
})
    

module.exports = router;