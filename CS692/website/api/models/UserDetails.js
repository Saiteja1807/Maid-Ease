const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');
const StateDetails = require('./StateDetails');
const SubscriptionTypes = require('./SubscriptionTypes');
const UserRoles = require('./userRoles');

class UserDetails extends Model {}

UserDetails.init({
    UserId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address2: {
        type: DataTypes.STRING
    },
    City: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StateId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: StateDetails,
            key: 'StateId'
        }
    },
    Country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ZipCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    EmailId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    ContactNo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SubscriptionTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: SubscriptionTypes,
            key: 'SubscriptionTypeId'
        }
    },
    UserRoledId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: UserRoles,
            key: 'UserRoledId'
        }
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
    modelName: 'UserDetails',
    tableName: 'userdetails',
    timestamps: false
});

module.exports = UserDetails;
