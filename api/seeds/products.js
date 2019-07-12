exports.seed = function seed( knex, Promise ) {

  var tableName = 'products';

  var rows = [

      // You are free to add as many rows as you feel like in this array. Make sure that they're an object containing the following fields:
      {
        cat: 'bags',
        img: '2018/11/Koonga-art-hobo-bag-M44-B-bagslife.jpg',
        name: 'austrian Cruelty free hobo bag, Vegan art-boho large shoulder bag, Sac a main, Anniversary womens gift',
        slug: 'austrian-cruelty-free-hbo-bag',
        price: '98',
        type: 'hobo,shoulder',
        desc: 'Make them jealous! :) Handmade hobo bag ‘KOONGA’. \n The original ‘BAGSlife’ design based on an mandala-decor pattern (Kielak Dziewulski). Bag chamber is finished with a lining fabric. Inside the chamber there are two pockets, one zipped up. \n Front of the bag made of cotton linen covered with DTG print. Metal parts in oxyd colour. Hand washable in 90 °F . \n Dry in a flat position. Use protective cloth to iron. \n Every bag is cut and finished by hand. That is why the particular items might differ slightly from each other. \n The colors in the photos might also diverge from the original because of the parameters of a display. A hobo bag, model KOONGA, design: M44-B Dimensions – see the last picture. Weight: 1 lb . Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-art-hobo-bag-M44-B-bagslife.jpg,2018/11/Art-hobo-Koonga-M44-B-bagslife.jpg,2018/11/Koonga-M44-B-bagslife.jpg,2018/11/Koonga-hobo-M44-B-bagslife.jpg`
      },
      {
        cat: 'bags',
        img: '2019/01/Elva-boho-bag-M32-D-bagslife.jpg',
        name: 'Art-Boho crossbody purse ELVA, Sac a main, Eco friendly Tasche',
        slug: 'art-boho',
        price: '98',
        type: `shoulder,crossbody`,
        desc: 'Boho sac for someone special… Vegan purse ‘ELVA’. The original ‘BAGSlife’ design based on an art-boho collage pattern (Kielak Dziewulski). Made of decorative upholstery fabrics, alcantara and cotton linen. Each one of the three bag chambers is finished with a lining fabric. The front chamber is opened and another two (the medium one and the back one) are zipped up. Inside the medium chamber there is an additional zipped up pocket. Front of the bag made of cotton linen covered with DTG print. Shoulder strap regulated up to 47” of maximum length; strap drop ~23” . Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Bags and purses are cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A handbag, model ELVA, pattern: M32-D Design: Kielak Dziewulski Dimensions: 11” x 11” x 3” Weight: 1,2 lb . Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2019/01/Elva-boho-bag-M32-D-bagslife.jpg`
      },
      {
        cat: 'bags',
        img: '2018/11/Koonga-boho-bag-M55-D-bags-life.jpg',
        name: 'Orange hobo vegan bag, Art boho style shoulder bag, Big bohemian gypsy purse',
        slug: 'orange-hobo-vegan-bag',
        price: '98',
        type: 'hobo,shoulder',
        desc: 'Handmade hobo bag ‘KOONGA’. The original ‘BAGSlife’ design based on an mandala-decor pattern (Kielak Dziewulski). Bag chamber is finished with a lining fabric. Inside the chamber there are two pockets, one zipped up. Front of the bag made of cotton linen covered with DTG print. Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Every bag is cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A hobo bag, model KOONGA, design: M55-D Dimensions – see the last picture. Weight: 1 lb . Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-boho-bag-M55-D-bags-life.jpg`
      },
      {
        cat: 'bags',
        img: '2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg',
        name: 'Vegan purse, Boho bag for woman, Unusual handbag<',
        slug: 'vegan-purse',
        price: '98',
        type: 'hobo,crossbody',
        desc: 'Different is always trendy :) Handmade purse ‘KOONGA’. The original ‘BAGSlife’ design based on an mandala-decor pattern (Kielak Dziewulski). Bag chamber is finished with a lining fabric. Inside the chamber there are two pockets, one zipped up. Front of the bag made of cotton linen covered with DTG print. Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Vegan boho bag is cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A hobo bag, model KOONGA, design: M62-B Dimensions – see the last picture. Weight: 1 lb . Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg`
      },
      {
        cat: 'bags',
        img: '2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg',
        name: 'Powder pink everyday large bag, Vegan hobo shoulder bag, Boho chic handbag',
        slug: 'alphabet',
        price: '98',
        type: 'crossbody',
        desc: 'With this bag you weigh less :) FREE SHIPPING. Powder pink everyday large bag ‘KOONGA’. The original ‘BAGSlife’ design based on an mandala-decor pattern (Kielak Dziewulski). Bag chamber is finished with a lining fabric. Inside the chamber there are two pockets, one zipped up. Front of the bag made of cotton linen covered with DTG print. Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Vegan hobo shoulder bag is cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A hobo bag, model KOONGA, design: M61-B Dimensions – see the last picture. Weight: 1 lb . Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg`
      },
      {
        cat: 'bags',
        img: '2018/11/Koonga-boho-art-bag-M55-C-bags-life.jpg',
        name: 'Boho vegan bag, Trending now purses, Sac a main',
        slug: 'boho-vegan-bag',
        price: '98',
        type: 'hobo,shoulder',
        desc: 'Let your handbag speak for yourself... :) Boho vegan bag ‘KOONGA’. The original ‘BAGSlife’ design based on an mandala-decor pattern (Kielak Dziewulski). Bag chamber is finished with a lining fabric. Inside the chamber there are two pockets, one zipped up. Front of the bag made of cotton linen covered with DTG print. Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Trending now purse is cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A hobo bag, model KOONGA, design: M55-C Dimensions – see the last picture. Weight: 1 lb . Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg`
      },
      {
        cat: 'bags',
        img: '2018/11/Koonga-boho-bag-M55-B-bags-life.jpg',
        name: 'Powder Vegan suede colorful hippie bag, Festival hobo handbag, Boho chic bag',
        slug: 'powder-vegan-suede-colorful',
        price: '98',
        type: 'hobo,shoulder',
        desc: 'Ethnic art to wear beauty bag for every occasion. Vegan suede hippie bag ‘KOONGA’. The original ‘BAGSlife’ design based on an mandala-decor pattern (Kielak Dziewulski). Bag chamber is finished with a lining fabric. Inside the chamber there are two pockets, one zipped up. Front of the bag made of cotton linen covered with DTG print. Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Festival hobo bag is cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A hobo bag, model KOONGA, design: M55-B Dimensions – see the last picture. Weight: 1 lb Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg`
      },
      {
        cat: 'bags',
        img: '2018/11/Hobo_boho_Koonga_M57-B_bags_life.jpg',
        name: 'Boho vegan leather bag, Hippie bohemian bag, Music festival gypsy purse',
        slug: 'boho-vegan-leather-bag',
        price: '98',
        type: 'hobo,shoulder',
        desc: 'Find your true colors! :) Handmade hippie bohemian bag ‘KOONGA’. The original ‘BAGSlife’ design based on an mandala-decor pattern (Kielak Dziewulski). Bag chamber is finished with a lining fabric. Inside the chamber there are two pockets, one zipped up. Front of the bag made of cotton linen covered with DTG print. Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Vegan leather bag is cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A hobo bag, model KOONGA, design: M57-B Dimensions – see the last picture. Weight: 1 lb Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg`
      },
      {
        cat: 'bags',
        img: '2019/01/art-boho-crossbody-bag-Elva-M4-37-bagslife.jpg',
        name: 'Colorful ethnic turquoise bag, Boho gypsy summer handbag',
        slug: 'colorful-ethnic-turquoise-bag',
        price: '98',
        type: 'crossbody,shoulder',
        desc: 'FREE SHIPPING worldwide Colorful ethnic turquoise bag, gypsy summer handbag. Handmade handbag ‘ELVA’. The original ‘BAGSlife’ project based on an art-boho collage pattern (Kielak Dziewulski). Made of decorative upholstery fabrics, alcantara and cotton linen. Each one of the three bag chambers is finished with a lining fabric. The front chamber is opened and another two (the medium one and the back one) are zipped up. Inside the medium chamber there is an additional zipped up pocket. Front of the bag made of cotton linen covered with DTG print. Shoulder strap regulated up to 47” of maximum length; strap drop ~23” . Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Every bag is cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A handbag, model ELVA, pattern: M4-37 Design: Kielak Dziewulski Dimensions: 11” x 11” x 3” Weight: 1,2 lb Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg`
      },
      {
        cat: 'bags',
        img: '2018/11/Hobo_boho_Koonga_M57-B_bags_life.jpg',
        name: 'Graphite vegan leather hobo bag, boho luxe big shoulder bag, sac bandoulière',
        slug: 'graphite-vegan-leather-hobo-bag',
        price: '98',
        type: 'hobo,shoulder',
        desc: 'Let your handbag speak for yourself... :) Handmade h obo bag ‘ KOONGA ’. The original ‘BAGSlife’ design based on an mandala-decor pattern (Kielak Dziewulski). B ag chamber is finished with a lining fabric. Inside the c hamber there are two pocket s, one zipped up. Front of the bag made of cotton linen covered with DTG print. Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Every bag is cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A h obo bag, model KOONGA , design: M47-B Dimensions – see the last picture. Weight: 1 lb . Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg`
      },
      {
        cat: 'bags',
        img: '2018/09/Koonga-hobo-bag-M41-B-bags-life.jpg',
        name: 'Turquoise big boho bag, Blue hobo shoulder bag, bolso de mano, borsetta',
        slug: 'turquoise-big-boho-bag',
        price: '98',
        type: 'hobo,shoulder',
        desc: 'FREE SHIPPING   worldwide Limited edition good vibes - only for women with colorful soul :) Big turquoise hobo handbag ‘KOONGA’. The original ‘BAGSlife’ design based on an mandala-decor pattern (Kielak Dziewulski). Bag chamber is finished with a lining fabric. Inside the chamber there are two pockets, one zipped up. Front of the bag made of cotton linen covered with DTG print. Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Ethnic shoulder bag is cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A hobo bag, model KOONGA, design: M41-B Dimensions – see the last picture. Weight: 1 lb Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg`
      },
      {
        cat: 'bags',
        img: '2019/01/Koonga-vegan-hobo-bag-M46-B-bags-life.jpg',
        name: 'Bohemian hobo bag, Boho gypsy large handbag',
        slug: 'bohemian-hobo-bag',
        price: '98',
        type: 'hobo,shoulder',
        desc: 'Let your handbag speak for yourself... :) Handmade h obo bag ‘ KOONGA ’. The original ‘BAGSlife’ design based on an mandala-decor pattern (Kielak Dziewulski). B ag chamber is finished with a lining fabric. Inside the c hamber there are two pocket s, one zipped up. Front of the bag made of cotton linen covered with DTG print. Metal parts in oxyd colour. Hand washable in 90 °F . Dry in a flat position. Use protective cloth to iron. Every bag is cut and finished by hand. That is why the particular items might differ slightly from each other. The colors in the photos might also diverge from the original because of the parameters of a display. A h obo bag, model KOONGA , design: M46-B Dimensions – see the last picture. Weight: 1 lb . Thank you for visiting our store :)',
        gender: 'female',
        similar: `5,6`,
        images: `2018/11/Koonga-M61-B-bags-life-Hobo-bag.jpg`
      },
  ];

  return knex( tableName )
      // Empty the table (DELETE)
      .del()
      .then( function() {
          return knex.insert( rows ).into( tableName );
      });

};