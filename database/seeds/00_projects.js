
exports.seed = function(knex) {
  // Deletes ALL existing entries

  const seedData = [
    {
      project_name: "resource one",
      description: "solve prime number theory",
      completed: false
    },
    {
      project_name: "resource two",
      description: "can not help",
      completed: false
    },
    {
      project_name: "resource three",
      description: "none",
      completed: false
    }
]
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert(seedData);
    });
};
