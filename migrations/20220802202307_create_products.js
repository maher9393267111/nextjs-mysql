

exports.up = (knex) => knex.schema.createTable('user111', (table) => {
   
  
    

    table.increments().primary();
    table.string('name', 255).notNull();
    table.string('email', 255).notNull().unique();
    table.string('password', 255).notNull();
   


   
   
  }).then(() => knex.schema.createTable('user_role111', (table) => {
  

 

 

    
    table.increments('id').primary()
 //   table.bigInteger("user_id").references("id").inTable("user").notNullable();
    table.jsonb("settings").defaultTo({keys: [], status: "private"}).notNullable();






  

  })
  )
  
  
  exports.down = async (knex) => {
   
    await knex.schema.dropTable('user');
    await knex.schema.dropTable('user_role');   
  };
  





