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
        allowNull: false
    },
    ServiceProviderId1: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ServiceProviderId2: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    ServiceProviderId3: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    NetAmount: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    Tax: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    Discount: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    TotalPrice: {
        type: DataTypes.FLOAT,
        allowNull: true
    },
    BookingStartDate: {
        type: DataTypes.DATEONLY, // Use DATEONLY for date without time
        allowNull: true
    },
    BookingEndDate: {
        type: DataTypes.DATEONLY, // Use DATEONLY for date without time
        allowNull: true
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
        defaultValue: DataTypes.NOW
    },
    CreatedBy: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    UpdatedBy: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    SlotTime: {
        type: DataTypes.TIME,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'BookingDetails',
    tableName: 'bookingdetails',
    timestamps: false
});

module.exports = BookingDetails;
