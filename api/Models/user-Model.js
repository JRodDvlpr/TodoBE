const db = require('../../database/dbConfig');


const find = (filter) => {
    return db('users')
    .select('id', 'username', 'password')
    .where(filter)
}

// const findById = (id) => {
//     return db('users as u')
//     .where({ id })
//     .first()
//     .then(User => {
//         return db('todo')
//         .where({ user_id: id })
//         .then(todo => {
//             return {
//                 User: user,
//                 todo: todo.map(todo => ({ ...todo }))
//             }
//         })
        
//     })

// }

const findById = (id) => {
    return db('users')
    .where({ id })
    .first()

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
        return findById(id)
    })
}

const remove = () => {
    return db('users')
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