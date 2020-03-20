
exports.seed = function(knex) {

  const seedData = [
    {
      name: "resource one",
      description: "solve prime number theory"
    },
    {
      name: "resource two",
      description: "can not help"
    },
    {
      name: "resource three",
      description: "none"
    }
]
  // Deletes ALL existing entries
  return knex('resources').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert(seedData);
    });
};
