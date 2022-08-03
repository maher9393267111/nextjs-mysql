exports.up = async function(knex) {
    await knex.schema.createTable('user', t => {
        t.uuid('user_id').primary()
        t.string('name', 100).notNullable()
        t.string('surname', 100)
        t.string('email').notNullable().unique()
        t.string('password')
        t.boolean('email_confirmed')
          .notNullable()
          .defaultTo(false)
        t.datetime('last_login', { precision: 6 })
          .defaultTo(knex.fn.now(6))
        t.string('language')
        t.string('newsletter')
        t.timestamps(true, true)
        t.uuid('company_id')
    });
  
    await knex.schema.createTable('company', t => {
      t.uuid('company_id').primary()
      t.string('address_id')
      t.string('name', 100).notNullable()
      t.string('phone')
      t.timestamps(true, true)
      t.uuid('owner_user_id')
        .references('user_id')
        .inTable('user')
    });
  
    await knex.schema.table('user', t => {
        t.foreign('company_id')
          .references('company_id')
          .inTable('company')
    });
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down =async function(knex) {
    await knex.schema.dropTableIfExists("users");
    await knex.schema.dropTableIfExists("company");

};

