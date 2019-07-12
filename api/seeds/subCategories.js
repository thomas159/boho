exports.seed = function seed( knex, Promise ) {

  var tableName = 'subCategories';

  var rows = [
    {
      name: 'rings',
      nameP: 'pierścienie',
      slug: 'rings',
      slugP: 'pierscienie',
      cat: 'jewellery',
      catP: 'bizuteria',
      hero: 'xf3e9i0cwmtj8lv/ring2.jpg?dl=0',
      img: 'xf3e9i0cwmtj8lv/ring2.jpg?dl=0',
    },
    {
      name: 'bracelets',
      nameP: 'Kajdany',
      slug: 'bracelets',
      slugP: 'Kajdany',
      cat: 'jewellery',
      catP: 'bizuteria',
      hero: 'h2olrnk3ehs5b51/bracelet1.jpg?dl=0',
      img: 'h2olrnk3ehs5b51/bracelet1.jpg?dl=0',
    },
    {
      name: 'earrings',
      nameP: 'kolczyki',
      slug: 'earrings',
      slugP: 'earrings',
      cat: 'jewellery',
      catP: 'bizuteria',
      hero: 'mkjbuynd814eo3m/earrings.png?dl=0',
      img: 'mkjbuynd814eo3m/earrings.png?dl=0',
    },
    {
      name: 'necklaces',
      nameP: 'kolczyki',
      slug: 'necklaces',
      slugP: 'earrinecklacesngs',
      cat: 'jewellery',
      catP: 'bizuteria',
      hero: 'ilv9c6n5fkof9h0/necklace.png?dl=0',
      img: 'ilv9c6n5fkof9h0/necklace.png?dl=0',
    },
    {
      name: 'pendants ',
      nameP: 'zawieski',
      slug: 'pendants',
      slugP: 'zawieski',
      cat: 'jewellery',
      catP: 'bizuteria',
      hero: 'ilv9c6n5fkof9h0/necklace.png?dl=0',
      img: 'ilv9c6n5fkof9h0/necklace.png?dl=0',
    },
    {
      name: 'mens',
      nameP: 'mężczyzna',
      slug: 'mens',
      slugP: 'mężczyzna',
      cat: 'jewellery',
      catP: 'bizuteria',
      hero: 'ilv9c6n5fkof9h0/necklace.png?dl=0',
      img: 'ilv9c6n5fkof9h0/necklace.png?dl=0',
    },
    {
      name: 'accessories',
      nameP: 'akcesoria',
      slug: 'accessories',
      slugP: 'akcesoria',
      cat: 'jewellery',
      catP: 'bizuteria',
      hero: 'ilv9c6n5fkof9h0/necklace.png?dl=0',
      img: 'ilv9c6n5fkof9h0/necklace.png?dl=0',
    },
    {
      name: 'sale',
      nameP: 'promocje',
      slug: 'sale',
      slugP: 'promocje',
      cat: 'jewellery',
      catP: 'bizuteria',
      hero: 'ilv9c6n5fkof9h0/necklace.png?dl=0',
      img: 'ilv9c6n5fkof9h0/necklace.png?dl=0',
    },

  ];

  return knex( tableName )
      // Empty the table (DELETE)
      .del()
      .then( function() {
          return knex.insert( rows ).into( tableName );
      });

};
