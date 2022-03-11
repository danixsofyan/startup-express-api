module.exports = (sequelize, DataTypes) => {
    const Startup = sequelize.define('Startup', {
        id: { 
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
           },
           name: {
             type: DataTypes.STRING,
             allowNull: false
           },
           email: {
             type: DataTypes.STRING,
             allowNull: false
           },
           desc: {
             type: DataTypes.TEXT,
             allowNull: false
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