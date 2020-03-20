const db = require("../../database/dbConfig.js");

module.exports = {
  add,
  find,
  findById,
  findBy
};

function add(project) {
  return db("projects")
    .insert(project)
    .then(([id]) => findById(id));
}

function find() {
  return db("projects");
}

function findById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function findBy(id) {
  return db("tasks")
    .join("projects as p", "tasks.project_id", "p.id")
    .select(
      "tasks.id as task_id",
      "tasks.description as task_description",
      "tasks.notes as task_notes",
      "tasks.completed",
      "p.project_name",
      "p.description as project_description"
    )
    .where({ project_id: id });
}
