const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class StateDetails extends Model {}

StateDetails.init({
    StateId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    StateName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CreatedDate: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    CreatedBy: {
        type: DataTypes.STRING
    }
}, {
    sequelize,
    modelName: 'StateDetails',
    tableName: 'statedetails',
    timestamps: false
});

module.exports = StateDetails;
