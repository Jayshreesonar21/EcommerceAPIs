'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const USER1_ID = await queryInterface.rawSelect(
      'users',
      {
        where: {
          email: 'user1@gmail.com',
        },
      },
      ['id'],
    );

    const USER2_ID = await queryInterface.rawSelect(
      'users',
      {
        where: {
          email: 'user2@gmail.com',
        },
      },
      ['id'],
    );

    const ADDRESSES = [
      {
        firstName: 'Demo-1',
        lastName: 'Sonar',
        address: '273,Subhash nagar',
        city: 'Surat',
        country: 'India',
        zipCode: '394210',
        userId: USER1_ID,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Demo-2',
        lastName: 'Sonar',
        address: '273,Subhash nagar',
        city: 'Surat',
        country: 'India',
        zipCode: '394210',
        userId: USER1_ID,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Demo-3',
        lastName: 'Sonar',
        address: '273,Subhash nagar',
        city: 'Surat',
        country: 'India',
        zipCode: '394210',
        userId: USER2_ID,
        isDeleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return await queryInterface.bulkInsert('addresses', ADDRESSES);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('addresses', null, {});
  },
};
