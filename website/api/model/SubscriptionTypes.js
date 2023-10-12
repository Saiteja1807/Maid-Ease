const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:Thankyou@1415@localhost:3306/maid_ease');
const SubscriptionTypes = sequelize.define('SubscriptionTypes', {
    SubscriptionTypeId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    SubscriptionTypeName: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    Price: {
        type: DataTypes.FLOAT,
        allowNull: false
    }, 
    UserRoledId: {
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
    }
}, {
    tableName: 'SubscriptionTypes',
    timestamps: false // Disables createdAt and updatedAt
});

module.exports = SubscriptionTypes;