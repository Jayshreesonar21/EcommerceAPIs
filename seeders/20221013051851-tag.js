'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('tags', [
      {
        name: 'jeans',
        slug: 'J2345Resd',
        description: 'Jeans or the like',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'shoes',
        slug: 'S57Urd',
        description: 'Shoes of any kind',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'jackets',
        slug: 'Jty56sdfj',
        description: 'Jackets against the cold',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('tags', null, {});
  },
};
