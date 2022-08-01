var knex = require('knex')({
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      port : '3306',
    //  password: '',
      database:'test' 
    }
  })
  
  export default knex;