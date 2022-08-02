exports.up = function(knex) {
    return knex.schema.createTable('posts2', function(table) {
        table.increments();
        table.string('title');
        table.text('content');
        table.timestamps(true, true);
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('posts2');
};