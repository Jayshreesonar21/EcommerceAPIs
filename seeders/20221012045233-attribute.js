'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('attributes', [
      {
        name: 'size',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'color',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('attributes', null, {});
  },
};
