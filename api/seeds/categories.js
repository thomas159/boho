exports.seed = function seed( knex, Promise ) {

  var tableName = 'categories';

  var rows = [

    {
      name: 'home',
      nameP: 'biżuteria',
      slug: '',
      slugP: '',
      hero: 'xf3e9i0cwmtj8lv/ring2.jpg?dl=0',
      img: 'xf3e9i0cwmtj8lv/ring2.jpg?dl=0'
    },
    {
      name: 'bags',
      nameP: 'torby',
      slug: 'bags',
      slugP: 'torby',
      hero: 'f45ynici2t976oe/watches.jpg?dl=0',
      img: 'f45ynici2t976oe/watches.jpg?dl=0',
    },
    {
      name: 'delivery',
      nameP: 'dostawa',
      slug: 'delivery',
      slugP: 'dostawa',
      hero: 'f45ynici2t976oe/watches.jpg?dl=0',
      img: 'f45ynici2t976oe/watches.jpg?dl=0',
    },
    {
      name: 'about us',
      nameP: 'o nas',
      slug: 'about',
      slugP: 'o-nas',
      hero: 'f45ynici2t976oe/watches.jpg?dl=0',
      img: 'f45ynici2t976oe/watches.jpg?dl=0',
    },
  ];

  return knex( tableName )
      // Empty the table (DELETE)
      .del()
      .then( function() {
          return knex.insert( rows ).into( tableName );
      });

};