exports.up = function(knex) {
    return Promise.all([
        knex.schema.createTable('posts4', function(table) {
            table.increments();
            table.string('title');
            table.text('content');
            table.json('textarray');
            table.timestamps(true, true);
        }),
  
  
   
  
      knex.schema.createTable('plans4', function (table) {
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
      knex.schema.dropTable('posts4'),
      knex.schema.dropTable('plans4'),
     
    ])
  };