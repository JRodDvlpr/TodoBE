
exports.up = async function(knex) {
  
    // ### USERS TABLE ### //
    await knex.schema.createTable
    ('users', (tbl) => {
        tbl.increments();
        tbl.string('username', 24).notNullable().unique();
        tbl.string('password').notNullable();
        tbl.string('email').notNullable().unique();
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())

    })

    await knex.schema.createTable('task', (tbl) => {
        tbl.increments()
        tbl.string('text', 120).notNullable()
        tbl.boolean('completed').notNullable().defaultTo(false)
        tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

        tbl.timestamp('created_at').defaultTo(knex.fn.now())
        tbl.timestamp('updated_at').defaultTo(knex.fn.now())
    })

};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('task')
  .dropTableIfExists('users')
};
