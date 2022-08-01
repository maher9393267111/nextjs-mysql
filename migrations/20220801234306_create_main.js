exports.up = function(knex) {
    return Promise.all([
        knex.schema.createTable('posts2', function(table) {
            table.increments();
            table.string('title');
            table.text('content');
            table.timestamps(true, true);
        }),
  
  
   
  
      knex.schema.createTable('plans', function (table) {
        table.increments('id').primary();
        table.string('name');
        table.string('description');
        table.integer('owner_id');
        table.integer('avg_rating');
        table.integer('likes');
        table.string('tod');
      }),
  
     

  
    ])
  
  };
  
  exports.down = function(knex) {
    return Promise.all([
      knex.schema.dropTable('posts2'),
      knex.schema.dropTable('plans'),
     
    ])
  };