const db = require('../../database/dbConfig');


const find = () => {
    return db('users')
    .select('*')
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

const findById = (todoId) => {
    return db
    .select('users as u', 'u.user_id', 'u.username', 'u.password', 'u.todo')
    .from('users')
    .innerJoin('todo as t', 't.id', 't.user_id')
    .where({ 't.id': todoId })
    

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