module.exports = {

  development: {

    migrations: { tableName: 'eshopKnex_migrations' },
    seeds: { tableName: './eshopSeeds' },

    client: 'mysql',
    connection: {

      host: 'us-cdbr-iron-east-01.cleardb.net',

      user: 'b2a33dd01ca0f1',
      password: 'd3226912',

      database: 'heroku_2d14ed97f96a62e',
      charset: 'utf8',
    }
  }
};