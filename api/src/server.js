import Hapi from 'hapi';
import Knex from './knex';
import { ipaddress } from '../../config'

const server = new Hapi.Server({
  host: `${ipaddress}`,
  port: 3000,
  routes: { cors: true }
})

server.route({
  method: 'GET',
  path: '/categories',
  handler: function (request, h) {
     return  Knex( 'categories' ).select( '*' ).then( ( results ) => {
      return results
     })
  }
})
server.route({
  method: 'GET',
  path: '/sub-categories',
  handler: function (request, h) {
     return  Knex( 'subCategories' ).select( '*' ).then( ( results ) => {
      return results
     })
  }
})

server.route({
  method: 'GET',
  path: '/products',
  handler: function (request, h) {
     return  Knex( 'products' ).select( '*' ).then( ( results ) => {
      return results
     })
  }
})

    // In general, the Knex operation is like Knex('TABLE_NAME').where(...).chainable(...).then(...)


server.start((err) => {

  if (err) {
      throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});