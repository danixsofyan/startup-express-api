'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('place_types', [{
      name: 'Indigo Hub',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('place_types', [{
      name: 'Indigo Space',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('place_types', null, {});
  }
};
