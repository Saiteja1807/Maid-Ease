const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class RatingDetails extends Model {}

RatingDetails.init({
    RatingsId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'UserDetails', // Assuming this is the name of your UserDetails model
            key: 'UserId' // Assuming this is the primary key of your UserDetails table
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
    Ratings: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Comments: {
        type: DataTypes.STRING(1000)
    },
    ReviewGivenDate: {
        type: DataTypes.DATE
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
        type: DataTypes.STRING(50)
    },
    UpdatedBy: {
        type: DataTypes.STRING(50)
    }
}, {
    sequelize,
    modelName: 'RatingDetails',
    tableName: 'ratingdetails',
    timestamps: false
});

module.exports = RatingDetails;
