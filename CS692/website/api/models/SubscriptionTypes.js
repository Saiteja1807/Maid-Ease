const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const UserRoles = require('./userRoles');

class SubscriptionTypes extends Model {}

SubscriptionTypes.init({
    SubscriptionTypeId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    SubscriptionTypeName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    UserRoleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserRoles,
            key: 'id'
        }
    },
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    CreatedBy: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'SubscriptionTypes',
    tableName: 'subscriptiontypes',
    timestamps: false
});

module.exports = SubscriptionTypes;
