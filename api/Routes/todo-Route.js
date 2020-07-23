const router = require('express').Router();

const Todo = require('../Models/todo-Model')
const { json } = require('express');


// router.get('/', (req, res ) => {

//     res.json({ Route: 'Welcome to the Todo Route '})
// })

router.get('/',  (req, res) => {

    Todo.find()
    .then(tasks =>{
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get tasks"})
    })

})

router.get('/:id',  (req, res) => {
    const { id } = req.params;

    Todo.findById(id)
    .then(task => {
        task ?
        res.status(200).json(task) :
        res.status(404).json({ message: "Invalid Task ID"})
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve tasks"})
    })
})

module.exports = router;