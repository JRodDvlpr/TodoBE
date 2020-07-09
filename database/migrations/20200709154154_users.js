
exports.up = async function(knex) {
  

    // ### USERS TABLE ### //
    await knex.schema.createTable
    ('users', (tbl) => {
        tbl.increments();
        tbl.string('username', 24).notNullable().unique();
        tbl.string('password').notNullable();
        tbl.string('email').notNullable();
        tbl.timestamps(true,true);

    })

    await knex.schema.createTable('todo', (tbl) => {
        tbl.increments()
        tbl.string('name', 120).notNullable().unique();

        tbl.string('description').notNullable()
        
        tbl.boolean('completed').notNullable().defaultTo(false)

        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl.timestamps(true, true);
    })

    await knex.schema.createTable('tasks', (tbl) => {
        tbl.increments();
        tbl.string('description', 250)
        tbl.string('notes', 250)

        tbl.boolean('completed')
        .notNullable()
        .defaultTo(false)

        tbl.integer('todo_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('todo')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl.timestamps(true, true);
        
    })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('tasks')
  .dropTableIfExists('todo')
  .dropTableIfExists('users')
};