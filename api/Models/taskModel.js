const db = require('../../database/dbConfig');

const findByUser = (user_id) => {
    return db('todo')
    .where({ user_id: user_id })
}


const findById = (id) => {
    return db('todo')
    .where({ id })
    .first()

}

const add = (todo) => {
    return db('todo')
    .insert(todo, 'id')
    
}

const update = (id, changes) => {
    return db('todo')
    .where({ id })
    .update(changes)
    
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