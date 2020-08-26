const db = require('./data/dbConfig')

module.exports = {
    get,
    insert,
    update,
    remove
}

function get(id){
    return id ? db('cars').where({ id: Number(id) }).first() : db('cars')
}

function insert(body){
    return db('cars')
    .insert(body)
    .then(() => body)
}

function update(id, changes){
    return db('cars')
    .update(changes)
    .where('id', id)
}

function remove(id){
    return db('cars')
    .where('id', id)
    .delete()
}