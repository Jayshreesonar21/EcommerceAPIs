'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('categories', [
      {
        name: 'kids',
        description: 'Kids category',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'teenagers',
        description: 'Teenagers category',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'adults',
        description: 'Adults category',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('categories', null, {});
  },
};
