const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('./generate-Token.js');

const Users = require('../Models/user-Model');


// ### USER REGISTRATION ### 

router.post('/register', (req, res) => {

    const newUser = req.body;

    const hash = bcrypt.hashSync(newUser.password, 8);
    newUser.password = hash

    //generates token after registrating
    const token = generateToken(newUser)

    Users.add(newUser)
    .then(saved => {
        res.status(201).json({ saved: "User has been registered succesfully..", id: saved.id, username: saved.username, token: token})
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
});


router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Users.find({ username })
    .first()
    .then(user => {
        if ( user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user)

            res.status(200).json({ message: `Welcome to the TodoAppo`, id:user.id, username:user.username, token })
        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'There was an error loggin in', err })
    })
})

module.exports = router;