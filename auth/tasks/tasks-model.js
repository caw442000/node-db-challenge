const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findById
};

function add(task) {
  return db("tasks")
    .insert(task)
    .then(([id]) => findById(id));
}

function find() {
  return db("tasks")
    .join("projects as p", "tasks.project_id", "p.id")
    .select(
      "tasks.id as task_id",
      "tasks.description as task_description",
      "tasks.notes as task_notes",
      "tasks.completed",
      "p.project_name",
      "p.description as project_description"
    );
}

function findById(id) {
  return db("tasks")
    .where({ id })
    .first();
}
