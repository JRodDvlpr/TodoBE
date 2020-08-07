const db = require('../../database/dbConfig');


const find = () => {
    return db('users')
    .select('*')
    
}

const findBy = (id) => {
    return db('users')
    .where({ id })
    
}

const findById = (id) => {
    return db('users as u')
    .where('u.id', id)
    .join('todo as t', 't.user_id', 'u.id')
    .select(
        'u.id as user_id',
        'u.username',
        't.id as todo_id',
        't.name',
        't.description',
        't.completed',

    )

}

const add = (user) => {
    return db('users')
    .insert(user, 'id')
    .then((ids) => {
        return findById(ids[0])
    })
}

const update = (changes, id) => {
    return db('users')
    .where({ id })
    .update(changes, 'id')
    .then(() => {
        return findBy(id)
    })
}

const remove = () => {
    return db('users')
    .where({ id })
    .del()
}

module.exports = {

    find,
    findBy,
    findById,
    add, 
    update,
    remove
}