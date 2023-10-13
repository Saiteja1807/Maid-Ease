const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class UserRoles extends Model {}

UserRoles.init({
    UserRoledId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    RoleName: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    CreatedDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    UpdatedDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')
    },
    CreatedBy: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    UpdatedBy: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'UserRoles',
    tableName: 'UserRoles',
    timestamps: false
});

module.exports = UserRoles;
