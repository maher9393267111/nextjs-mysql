exports.up = async function (knex) {
  await knex.schema.createTable("categories", (t) => {
    t.uuid("id").primary();
    t.string("name", 100).notNullable();
    t.string("desc", 100).notNullable();
    t.string("image", 20000).notNullable();

    t.timestamps(true, true);
  });

  await knex.schema.createTable("porducts", (t) => {
    t.uuid("id").primary();

    t.uuid("cat_id").references("id").inTable("categories");

    t.string("name", 100).notNullable();
    t.string("desc", 100).notNullable();
    t.string("image", 20000).notNullable();
    t.integer("price").notNullable();
    t.integer("quantity").notNullable();
    t
      .jsonb("object")
      .defaultTo({ keys: [], status: "private" })
      .notNullable();

    t.timestamps(true, true);
   
  });

  //   await knex.schema.table("user", (t) => {
  //     t.foreign("company_id").references("company_id").inTable("company");
  //   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("categories");
  await knex.schema.dropTableIfExists("products");
};
