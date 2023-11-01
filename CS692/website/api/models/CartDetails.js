const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class CartDetails extends Model {}

CartDetails.init({
    CartDetailId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'UserDetails', 
            key: 'UserId'
        }
    },
    ServiceProviderId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ServiceProviderDetails', 
            key: 'ServiceProviderId' 
        }
    },
    AddToCart: {
        type: DataTypes.BOOLEAN,
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
        allowNull: false,
        onUpdate: 'CURRENT_TIMESTAMP'
    },
    CreatedBy: {
        type: DataTypes.STRING(50)
    },
    UpdatedBy: {
        type: DataTypes.STRING(50)
    }
}, {
    sequelize,
    modelName: 'CartDetails',
    tableName: 'cartdetails',
    timestamps: true,
    createdAt: 'CreatedDate',
    updatedAt: 'UpdatedDate'
});

module.exports = CartDetails;
