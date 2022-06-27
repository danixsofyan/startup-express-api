'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('industries', [{
      name: 'Agriculture & Fishery',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('industries', [{
      name: 'Marketplace',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('industries', [{
      name: 'Education',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('industries', [{
      name: 'Travel & Tourism',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('industries', [{
      name: 'IoT',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('industries', [{
      name: 'Smart City',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('industries', [{
      name: 'E-Health',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('industries', [{
      name: 'E-Health',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }]),
    queryInterface.bulkInsert('industries', [{
      name: 'Other',
      status: '1',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('industries', null, {});
  }
};
