const {
    Sequelize,
    DataTypes,
    Model
} = require('sequelize');

const sequelize = new Sequelize('mysql://root:Thankyou@1415@localhost:3306/maid_ease');
const UserDetails = sequelize.define('UserDetails', {
    UserId: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    FirstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    LastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address1: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Address2: {
        type: DataTypes.STRING,
    },
    City: {
        type: DataTypes.STRING,
        allowNull: false
    },
    StateId: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Country: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ZipCode: {
        type: DataTypes.STRING,
        allowNull: false
    },
    EmailId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    ContactNo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    SubscriptionTypeId: {
        type: DataTypes.INTEGER,
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
    },
    UpdatedBy: {
        type: DataTypes.STRING,
        allowNull: true
    }

}, {
    tableName: 'UserDetails',
    timestamps: false // Disables createdAt and updatedAt
});

module.exports = UserDetails;