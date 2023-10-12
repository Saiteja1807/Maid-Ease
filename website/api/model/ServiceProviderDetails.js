const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:Thankyou@1415@localhost:3306/maid_ease');
const ServiceProviderDetails = sequelize.define('ServiceProviderDetails', {
    ServiceProviderId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    UserDetailId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ServiceTypeId: {
        type: DataTypes.INTEGER,
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
    },
    ImageURL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'SubscriServiceProviderDetailsptionTypes',
    timestamps: false // Disables createdAt and updatedAt
});

module.exports = ServiceProviderDetails;