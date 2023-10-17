const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class ServiceProviderDetails extends Model {}

ServiceProviderDetails.init({
    ServiceProviderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserDetailId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'UserDetails', // name of Target model
            key: 'UserId' // key in Target model that we're referencing
        }
    },
    ServiceTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ServiceTypes', // name of Target model
            key: 'ServiceTypeId' // key in Target model that we're referencing
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
    },
    ImageURL: {
        type: DataTypes.STRING(2000)
    },
    Description: {
        type: DataTypes.STRING(5000)
    },
    Ratings: {
        type: DataTypes.FLOAT
    }
}, {
    sequelize,
    modelName: 'ServiceProviderDetails',
    tableName: 'serviceproviderdetails',
    timestamps: false
});

module.exports = ServiceProviderDetails;
