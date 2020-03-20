// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNUllAsDefault: true,
    connection: {
      filename: "./database/projectsDb.sqlite3"
    },
    migrations: {
      directory: "./database/migrations"
    },
    seeds: {
      directory: "./database/seeds"
    }
  }
};
