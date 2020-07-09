const router = require('express').Router();

const db = require('../../database/dbConfig')
const { json } = require('express');

router.get('/', (req, res ) => {

    res.json({ Route: 'Welcome to the Todo Route '})
})

module.exports = router;