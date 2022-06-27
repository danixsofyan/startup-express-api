module.exports = (sequelize, DataTypes) => {
    const Startup = sequelize.define('Startup', {
          id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
           },
           id_user: { 
            type: DataTypes.INTEGER,
            allowNull: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          solution: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          id_usecase_tribe: { 
            type: DataTypes.INTEGER,
            allowNull: true
          },
          id_industry: { 
            type: DataTypes.INTEGER,
            allowNull: false
          },
          target_customer: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          business_model: {
            type: DataTypes.TEXT,
            allowNull: false
          },
          location: {
            type: DataTypes.STRING,
            allowNull: false
          },
          time_of_operation : {
            type: DataTypes.STRING,
            allowNull: false
          },
          id_stage: { 
            type: DataTypes.INTEGER,
            allowNull: false
          },
          link: {
            type: DataTypes.STRING,
            allowNull: false
          },
          contact_person: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          },
          phone: {
            type: DataTypes.STRING,
            allowNull: false
          },
          pitch_deck: {
            type: DataTypes.STRING,
            allowNull: false
          },
          analysis: {
            type: DataTypes.STRING,
            allowNull: false
          },
          id_status: { 
            type: DataTypes.INTEGER,
            allowNull: true
          },
          createdAt: {
            type: DataTypes.DATE,
            allowNull: false
          },
          updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
          }
    }, {
        tableName: 'startups'
    });

    return Startup;
}