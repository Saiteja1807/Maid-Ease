const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class BookingDetails extends Model {}

BookingDetails.init({
    BookingId: {
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
    ServiceProviderId1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ServiceProviderDetails',
            key: 'ServiceProviderId'
        }
    },
    ServiceProviderId2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'ServiceProviderDetails',
            key: 'ServiceProviderId'
        }
    },
    ServiceProviderId3: {
        type: DataTypes.INTEGER,
        references: {
            model: 'ServiceProviderDetails',
            key: 'ServiceProviderId'
        }
    },
    NetAmount: {
        type: DataTypes.FLOAT
    },
    Tax: {
        type: DataTypes.FLOAT
    },
    Discount: {
        type: DataTypes.FLOAT
    },
    TotalPrice: {
        type: DataTypes.FLOAT
    },
    BookingStartDate: {
        type: DataTypes.DATE
    },
    BookingEndDate: {
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
    modelName: 'BookingDetails',
    tableName: 'bookingdetails',
    timestamps: false
});

module.exports = BookingDetails;
