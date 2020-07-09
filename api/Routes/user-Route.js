const router = require('express').Router();

const db = require('../../database/dbConfig')

// HASH PASSWORD
const bcrypt = require('bcryptjs');
const { json } = require('express');

router.get('/', (req, res ) => {

    res.json({ Route: 'Welcome to the Users Route '})
})

module.exports = router;