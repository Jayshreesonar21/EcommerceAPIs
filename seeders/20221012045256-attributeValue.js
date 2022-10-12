'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    const SIZE_ATTRIBUTE_ID = await queryInterface.rawSelect(
      'attributes',
      {
        where: {
          name: 'size',
        },
      },
      ['id'],
    );

    const COLOR_ATTRIBUTE_ID = await queryInterface.rawSelect(
      'attributes',
      {
        where: {
          name: 'color',
        },
      },
      ['id'],
    );

    const SIZES = [
      {
        value: 'S',
        attributeId: SIZE_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'M',
        attributeId: SIZE_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'L',
        attributeId: SIZE_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'XL',
        attributeId: SIZE_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'XXL',
        attributeId: SIZE_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    const COLORS = [
      {
        value: 'White',
        attributeId: COLOR_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Black',
        attributeId: COLOR_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Red',
        attributeId: COLOR_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Orange',
        attributeId: COLOR_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Yellow',
        attributeId: COLOR_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Green',
        attributeId: COLOR_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Blue',
        attributeId: COLOR_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Indigo',
        attributeId: COLOR_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        value: 'Purple',
        attributeId: COLOR_ATTRIBUTE_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    return await queryInterface.bulkInsert('attributevalues', [...SIZES, ...COLORS]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('attributevalues', null, {});
  },
};
