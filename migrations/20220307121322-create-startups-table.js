'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.createTable('startups', { 
        id: { 
         type: Sequelize.INTEGER,
         primaryKey: true,
         autoIncrement: true,
         allowNull: false
        },
        id_user: { 
          type: Sequelize.UUID,
          allowNull: true
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false
        },
        solution: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        id_usecase_tribe: { 
          type: Sequelize.INTEGER,
          allowNull: true
        },
        id_industry: { 
          type: Sequelize.INTEGER,
          allowNull: false
        },
        target_customer: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        business_model: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        location: {
          type: Sequelize.STRING,
          allowNull: false
        },
        time_of_operation : {
          type: Sequelize.STRING,
          allowNull: false
        },
        id_stage: { 
          type: Sequelize.INTEGER,
          allowNull: false
        },
        link: {
          type: Sequelize.STRING,
          allowNull: false
        },
        contact_person: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        phone: {
          type: Sequelize.STRING,
          allowNull: false
        },
        pitch_deck: {
          type: Sequelize.STRING,
          allowNull: false
        },
        analysis: {
          type: Sequelize.STRING,
          allowNull: false
        },
        id_status: { 
          type: Sequelize.INTEGER,
          allowNull: true
        },
        createdAt: {
          type: Sequelize.DATE,
          allowNull: false
        },
        updatedAt: {
          type: Sequelize.DATE,
          allowNull: false
        }
      });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('startups');
  }
};
