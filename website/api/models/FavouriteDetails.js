const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class FavouriteDetails extends Model {}

FavouriteDetails.init({
    FavouriteId: {
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
    IsFavourite: {
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
    modelName: 'FavouriteDetails',
    tableName: 'favouritedetails',
    timestamps: false
});

module.exports = FavouriteDetails;
