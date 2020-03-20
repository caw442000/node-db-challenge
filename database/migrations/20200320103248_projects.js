exports.up = function(knex) {
  return knex.schema
    .createTable("projects", tbl => {
      tbl.increments().unsigned();

      tbl.string("project_name", 128).notNullable();
      tbl.string("description", 256);
      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(0);
    })
    .createTable("resources", tbl => {
      tbl.increments().unsigned();

      tbl.string("name", 128).notNullable();
      tbl.string("description", 256);
    })
    .createTable("tasks", tbl => {
      tbl.increments().unsigned();

      tbl.string("description", 128).notNullable();
      tbl.string("notes", 400);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .boolean("completed")
        .notNullable()
        .defaultTo(false);
    })
    .createTable("project_resources", tbl => {
      //tbl.primary(["project_id", "resource_id"]);

      tbl.increments().unsigned();

      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      tbl
        .integer("resource_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
