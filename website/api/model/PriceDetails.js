const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:Thankyou@1415@localhost:3306/maid_ease');
const PriceDetails = sequelize.define('PriceDetails', {
    PriceId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ServiceProviderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    ServiceTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }, 
    Price: {
        type: DataTypes.FLOAT,
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
    tableName: 'PriceDetails',
    timestamps: false // Disables createdAt and updatedAt
});

module.exports = PriceDetails;