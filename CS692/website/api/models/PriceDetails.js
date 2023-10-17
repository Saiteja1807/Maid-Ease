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
    OriginalPrice: {
        type: DataTypes.FLOAT
    },
    DiscountedPrice: {
        type: DataTypes.FLOAT
    },
    DiscountinPercentage:{
        type: DataTypes.FLOAT
    }
}, {
    sequelize,
    modelName: 'PriceDetails',
    tableName: 'pricedetails',
    timestamps: false
});

module.exports = PriceDetails;
