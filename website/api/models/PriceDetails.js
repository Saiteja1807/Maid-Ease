const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class PriceDetails extends Model {}

PriceDetails.init({
    PriceId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ServiceProviderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ServiceProviderDetails', 
            key: 'ServiceProviderId'
        }
    },
    ServiceTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ServiceTypes',
            key: 'ServiceTypeId'
        }
    },
    Price: {
        type: DataTypes.FLOAT,
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
    modelName: 'PriceDetails',
    tableName: 'pricedetails',
    timestamps: false
});

module.exports = PriceDetails;
