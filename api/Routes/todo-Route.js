const router = require('express').Router();

const Todo = require('../Models/todo-Model')



// // ######### GET ALL Todo ##########
router.get('/',  (req, res) => {

    Todo.find()
    .then(tasks =>{
        res.status(200).json(tasks)
    })
    .catch(err => {
        res.status(500).json({ message: "Failed to get tasks"})
    })

})



// ######### GET individual Todo by ID ##########
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


// ######### POST Todo ##########
router.post('/todo', async (req, res) => {

    const user_id = req.params.id
    
    if(!req.body) {
        next("Missing Todo info");
    } else {
        const { name, description, completed    } = req.body;
        if (!name || !description) {
            next("Name and description is required.")
        } else if (!user_id){
            next("Valid user_id is required") 
        }else {
            // Todo validated
            const task = {
                name: name,
                description: description,
                completed: completed,
                user_id: user_id
            } 
            try {
                const newTask = await Todo.add(task);
                res.status(201).json(newTask)
            } catch (error) {
                res.status(500).json({ message: error.message})
            }
        }

    }
})

// ######### UPDATE/PUT individual Todo by ID ##########

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    Todo.findById(id)
    .then(task => {
        if (task) {
            Todo.update(changes, id)
            .then(updatedTask => {
                res.json(updatedTask);
            });
        } else {
            res.status(404).json({ message: 'Could Not Find Task With The Given Id' });
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Failed To Update Task Info."})
    })
})

// ######### DELETE individual Todo by ID ##########

router.delete('/:id', (req, res) => {
    const { id } = req.params;

    Todo.findById(id)
    .then(task => {
        if (!task) {
            next(`There is no task with the id ${id} to delete `)
        } else {
            Todo.remove(id)
            .then(deleted => {
                res.json({ message: `Removed ${deleted} from the database ` })
            })
        }
    })
    .catch(err => {
        res.status(500).json({ message: "Could not reach the database. Task was not deleted."})
    })
})

module.exports = router;