module.exports = {

  development: {

      migrations: { tableName: 'eshopKnex_migrations' },
      seeds: { tableName: './eshopSeeds' },

      client: 'mysql',
      connection: {

          host: '127.0.0.1',

          user: 'root',
          password: 'password',

          database: 'eshop',
          charset: 'utf8',

      }

  }

};