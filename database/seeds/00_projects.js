
exports.seed = function(knex) {
  // Deletes ALL existing entries

  const seedData = [
    {
      project_name: "resource one",
      description: "solve prime number theory",
      completed: 0
    },
    {
      project_name: "resource two",
      description: "can not help",
      completed: 1
    },
    {
      project_name: "resource three",
      description: "none",
      completed: 1
    }
]
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert(seedData);
    });
};
