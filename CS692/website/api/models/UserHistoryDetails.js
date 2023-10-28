const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class UserHistoryDetail extends Model {}

UserHistoryDetail.init({
    UserHistoryId: {
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
    Activity: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    Comments: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    ActivityDate: {
        type: DataTypes.DATE,
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
        type: DataTypes.STRING(50),
        allowNull: true
    },
    UpdatedBy: {
        type: DataTypes.STRING(50),
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'UserHistoryDetail',
    tableName: 'userhistorydetail',
    timestamps: false
});

module.exports = UserHistoryDetail;
