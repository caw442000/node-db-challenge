const db = require('../../database/dbConfig.js')

module.exports = {
  add,
  find
}

function add(task) {
  return db('tasks').insert(task)

}

function find() {
  return db('tasks')


}