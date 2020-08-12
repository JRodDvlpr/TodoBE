const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('./generate-Token.js');

const Users = require('../Models/user-Model');


// ### USER REGISTRATION ### 

router.post('/register', (req, res) => {

    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash

    //generates token after registrating
    const token = generateToken(user)

    Users.add(user)
    .then(newUser => {
        res.status(201).json({ newUser: "User has been registered succesfully..", id: newUser.id, username: newUser.username, token: token})
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
});

// ### USER REGISTRATION ### 

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Users.find({ username })
    .first()
    .then(user => {
        if ( user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)

            res.status(200).json({ message: `Welcome to the TodoAppo ${user.username}`, id:user.id, token })
        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'There was an error loggin in', err })
    })
})

module.exports = router;