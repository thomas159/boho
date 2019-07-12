export default require( 'knex' )( {

  client: 'mysql',
  connection: {

      host: '127.0.0.1',

      user: 'root',
      password: 'password',

      database: 'eshop',
      charset: 'utf8',

  }
});