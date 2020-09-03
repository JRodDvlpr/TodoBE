const router = require('express').Router();

const Todo = require('../Models/todo-Model')

const validateUserId = require('../Middleware/validateUserID.js')

// // ######### GET ALL Task for USER ##########
router.get('/:id/tasks', validateUserId,  (req, res) => {

    Todo.findByUser(req.params.id)
    .then(tasks =>{
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get tasks"})
    })

})

// ######### GET individual Task by ID ##########
router.get('/:id/tasks/:todoId', validateUserId, (req, res) => {

    Todo.findById(req.params.todoId)
    .then(task => {
        task ?
        res.status(200).json(task) :
        res.status(404).json({ message: "Invalid Task ID"})
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to retrieve tasks"})
    })
})


// ######### POST Task ##########
router.post('/:id/add', validateUserId,  (req, res) => {
    // user ID 
  

    Todo.add({ user_id: req.params.id, ...req.body})
    .then(add => {
        res.status(201).json(add)
    })
    .catch(error => {
        res.status(500).json(error.message)
    })
})

// ######### UPDATE/PUT individual Task by ID ##########

router.put("/:id/tasks/:todoId", validateUserId, (req, res, next) => {

    Todo.update(req.params.todoId, req.body) 
      .then(updated => {
        res.status(200).json(updated);
      })
      .catch(err => {
        next(err);
        console.log(err);
      });
  });

// ######### DELETE individual Task by ID ##########

router.delete('/:id/tasks/:todoId', validateUserId, (req, res) => {
    
  

    Todo.remove(req.params.id, req.params.todoId)
    .then(deleted => {
        res.json({ message: `Removed ${deleted} from the database ` })
    })
    .catch(err => {
        res.status(500).json({ message: "Could not reach the database. Task was not deleted."})
    })
})

module.exports = router;