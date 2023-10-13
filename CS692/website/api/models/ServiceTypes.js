const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class ServiceTypes extends Model {}

ServiceTypes.init({
    ServiceTypeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ServiceTypeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    UpdatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    },
    CreatedBy: {
        type: DataTypes.STRING
    },
    UpdatedBy: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'ServiceTypes',
    tableName: 'servicetypes',
    timestamps: false
});

module.exports = ServiceTypes;
