const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class CartDetails extends Model {}

CartDetails.init({
    CartDetailId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
        
    },
    UserId: DataTypes.INTEGER,
    ServiceProviderId: DataTypes.INTEGER,
    AddToCart: DataTypes.BOOLEAN,
    IsActive: DataTypes.BOOLEAN,
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    UpdatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    },
    CreatedBy: DataTypes.STRING,
    UpdatedBy: DataTypes.STRING
}, {
    sequelize,
    modelName: 'CartDetails',
    timestamps: false  // Explicitly specifying to match given table structure
});

module.exports = CartDetails;
