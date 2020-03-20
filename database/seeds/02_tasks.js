
exports.seed = function(knex) {


  const seedData = [
    {
      description: 'task description',
      notes: 'the task notes',
      project_id: 1,
      completed: true
    },
    {
      description: 'another task description',
      notes: 'the task notes',
      project_id: 1,
      completed: false
    },
    {
      description: 'task description',
      notes: 'the task notes',
      project_id: 2,
      completed: true
    },
    {
      description: 'another task description',
      notes: 'the task notes',
      project_id: 3,
      completed: false
    }
  ]
  // Deletes ALL existing entries
  return knex('tasks').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert(seedData);
    });
};
