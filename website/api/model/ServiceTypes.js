const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:Thankyou@1415@localhost:3306/maid_ease');
const ServiceTypes = sequelize.define('ServiceTypes', {
    ServiceTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ServiceTypeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    CreatedBy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UpdatedBy: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'ServiceTypes',
    timestamps: false // Disables createdAt and updatedAt
});

module.exports = ServiceTypes;