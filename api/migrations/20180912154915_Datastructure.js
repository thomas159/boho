
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable( 'categories', function( categoriesTable ) {
      categoriesTable.increments();
      categoriesTable.string( 'name', 100 ).notNullable();
      categoriesTable.string( 'nameP', 100 ).notNullable();
      categoriesTable.string( 'slug', 250 ).notNullable();
      categoriesTable.string( 'slugP', 250 ).notNullable();
      categoriesTable.string( 'hero', 100 ).notNullable();
      categoriesTable.string( 'img', 50 ).notNullable();
    })

    .createTable( 'subCategories', function( subCategoriesTable ) {
      subCategoriesTable.increments();
      subCategoriesTable.string( 'name', 100 ).notNullable();
      subCategoriesTable.string( 'nameP', 100 ).notNullable();
      subCategoriesTable.string( 'slug', 250 ).notNullable();
      subCategoriesTable.string( 'slugP', 250 ).notNullable();
      subCategoriesTable.string( 'cat', 250 ).notNullable();
      subCategoriesTable.string( 'catP', 250 ).notNullable();
      subCategoriesTable.string( 'hero', 100 ).notNullable();
      subCategoriesTable.string( 'img', 50 ).notNullable();
    })

    .createTable( 'products', function( productsTable ) {
      productsTable.increments();
      productsTable.string( 'cat', 100 ).notNullable();
      productsTable.string( 'img', 250 ).notNullable();
      productsTable.string( 'name', 128 ).notNullable();
      productsTable.string( 'slug', 250 ).notNullable();
      productsTable.string( 'price', 50 ).notNullable();
      productsTable.string( 'type', 50 ).notNullable();
      productsTable.string( 'desc', 500 ).notNullable();
      productsTable.string( 'gender', 10 ).notNullable();
      productsTable.string( 'similar', 100 ).notNullable();
      productsTable.string( 'images', 300 ).notNullable();
    })
          // .createTable( 'birds', function( birdsTable ) {

          //     // Primary Key
          //     birdsTable.increments();
          //     birdsTable.string( 'owner', 36 ).references( 'guid' ).inTable( 'reviews' );

          //     // Data
          //     // Each chainable method creates a column of the given type with the chained constraints. For example, in the line below, we create a column named `name` which has a maximum length of 250 characters, is of type string (VARCHAR) and is not nullable.
          //     birdsTable.string( 'name', 250 ).notNullable();
          //     birdsTable.string( 'species', 250 ).notNullable();
          //     birdsTable.string( 'picture_url', 250 ).notNullable();
          //     birdsTable.string( 'guid', 36 ).notNullable().unique();
          //     birdsTable.boolean( 'isPublic' ).notNullable().defaultTo( true );

          //     birdsTable.timestamp( 'created_at' ).notNullable();

          // } );

};

exports.down = function(knex, Promise) {

  // We use `...ifExists` because we're not sure if the table's there. Honestly, this is just a safety measure.
  return knex
      .schema
          .dropTableIfExists( 'categories' )
          .dropTableIfExists( 'subCategories')
          .dropTableIfExists( 'products');

};
