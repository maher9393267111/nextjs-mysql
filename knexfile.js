// // Update with your config settings.

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
// module.exports = {

//   development: {
//     client: 'mysql',
//     connection: {
//       filename: './migration',
//     }
//   },

//   staging: {
//     client: 'mysql',
//     connection: {
//       database: 'test',
//       user:     'root',
//       password: '',

//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'mysql',
//     connection: {
//       database: 'test',
//       user:     'root',
//       password: '',
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   }

// };

module.exports = {
  development: {
      client: 'mysql',
      connection: {
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'test',
          port: '3306'
      }
 },
};