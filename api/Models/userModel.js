const db = require('../../database/dbConfig');


const find = () => {
    return db('users')
      
}

const findBy = (filter) => {
    return db('users')
    .where(filter)
    
}

const findById = (id) => {
    return db('users')
    .where({ id })
    .first()
   
}

const add = (user) => {
    return db('users')
    .insert(user, 'id')
    
}

const update = (changes, id) => {
    return db('users')
    .where({ id })
    .update(changes, 'id')
    .then(() => {
        return findBy(id)
    })
}

const remove = (id) => {
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