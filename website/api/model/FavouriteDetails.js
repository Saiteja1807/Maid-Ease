const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:Thankyou@1415@localhost:3306/maid_ease');
const FavouriteDetails = sequelize.define('FavouriteDetails', {
    FavouriteId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    ServiceProviderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    IsFavourite: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    IsActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    CreatedBy: {
        type: DataTypes.STRING,
        allowNull: false
    },
    UpdatedBy: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'FavouriteDetails',
    timestamps: false // Disables createdAt and updatedAt
});

module.exports = FavouriteDetails;