const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('./generate-Token.js');

const Users = require('../Models/userModel');


// ### USER REGISTRATION ### 

router.post('/register', (req, res) => {

    const user = req.body;

    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash

    Users.add(user)
    .then((userId) => {
        user.id = userId[0];
        res.status(201).json(loginSuccessBody(user))
    })
    .catch(err => {
        res.status(500).json(err.message)
    })
});

// ### USER REGISTRATION ### 

router.post('/login', (req, res) => {
    const { username, password } = req.body;

    Users.findBy({ username })
    .first()
    .then(user => {
        console.log(user)

        if ( user && bcrypt.compareSync(password, user.password)) {
            res.status(200).json(loginSuccessBody(user))
        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    })
    .catch(err => {
        res.status(500).json({ message: 'There was an error loggin in', err })
    })
})

module.exports = router;


// Login BODY //
function loginSuccessBody(user) {
	const token = generateToken(user);

	return {
		user: {
			id: user.id,
			username: user.username,
		},
		token: token,
	};
}