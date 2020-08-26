const db = require('../../database/dbConfig');

const findByUser = (user_id) => {
    return db('todo')
    .where({ user_id: user_id })
}


const findById = (id) => {
    return db('todo')
    .where({ id })
    .first()
    // .then(todo => {
    //     return db('tasks')
    //     .where({ todo_id:id })
    //     .then(tasks => {
    //         return {
    //             todo: todo,
    //             tasks: tasks.map(tasks => ({ ...tasks }))
    //         }
    //     })
    // })
}

const add = (todo) => {
    return db('todo')
    .insert(todo, 'id')
    
}

const update = (changes, id) => {
    return db('todo')
    .where({ id })
    .update(changes, 'id')
    .then(() => {
        return findById(id)
    })
}

const remove = (id) => {
    return db('todo')
    .where({ id })
    .del()
}

module.exports = {
    findByUser,
    findById,
    add,
    update,
    remove
}