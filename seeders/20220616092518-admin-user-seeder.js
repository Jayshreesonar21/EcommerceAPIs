'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return await queryInterface.bulkInsert('users', [
      {
        firstName: 'Admin',
        lastName: 'System',
        email: 'admin@gmail.com',
        password: '$2a$12$Tv4pyIoi3Pano3sDWt/32.VYk8g84PFNjmj4GLp2V8mgDfitnQNTm', //12345678
        role: 'admin',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'User-1',
        lastName: 'Test-1',
        email: 'user1@gmail.com',
        password: '$2a$12$Tv4pyIoi3Pano3sDWt/32.VYk8g84PFNjmj4GLp2V8mgDfitnQNTm', //12345678
        role: 'user',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'User-2',
        lastName: 'Test-2',
        email: 'user2@gmail.com',
        password: '$2a$12$Tv4pyIoi3Pano3sDWt/32.VYk8g84PFNjmj4GLp2V8mgDfitnQNTm', //12345678
        role: 'user',
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  },
};
