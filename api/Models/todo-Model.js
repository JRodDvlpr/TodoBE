const db = require('../../database/dbConfig');

const find = () => {
    return db('todo')
    .select('*')
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
    .then((ids) => {
        return findById(ids[0])
    })
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
    find,
    findById,
    add,
    update,
    remove
}